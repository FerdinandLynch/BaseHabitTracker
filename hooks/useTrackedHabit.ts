"use client";

import { useCallback, useState } from "react";
import { Attribution } from "ox/erc8021";
import { decodeEventLog } from "viem";
import { useAccount, usePublicClient, useWriteContract } from "wagmi";
import { APP_ID, APP_NAME } from "@/lib/constants";
import {
  BASE_HABIT_TRACKER_ADDRESS,
  baseHabitTrackerAbi
} from "@/lib/contracts";
import { trackTransaction } from "@/utils/track";

const BUILDER_CODE = "bc_26rlxjli";
const EXPECTED_DATA_SUFFIX =
  "0x62635f3236726c786a6c690b0080218021802180218021802180218021";
const GENERATED_DATA_SUFFIX = Attribution.toDataSuffix({
  codes: [BUILDER_CODE]
});
const DATA_SUFFIX =
  GENERATED_DATA_SUFFIX === EXPECTED_DATA_SUFFIX
    ? GENERATED_DATA_SUFFIX
    : (EXPECTED_DATA_SUFFIX as `0x${string}`);

type CompleteHabitTrackedResult = {
  txHash: `0x${string}`;
  parsedTotal?: bigint;
};

type UseTrackedHabitResult = {
  isPending: boolean;
  errorMessage?: string;
  completeHabitTracked: () => Promise<CompleteHabitTrackedResult>;
};

export function useTrackedHabit(): UseTrackedHabitResult {
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const { writeContractAsync } = useWriteContract();
  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const completeHabitTracked = useCallback(async () => {
    if (!address) {
      throw new Error("Connect wallet first.");
    }
    if (!publicClient) {
      throw new Error("Public client unavailable.");
    }

    setErrorMessage(undefined);
    setIsPending(true);

    try {
      const txHash = await writeContractAsync({
        address: BASE_HABIT_TRACKER_ADDRESS,
        abi: baseHabitTrackerAbi,
        functionName: "completeHabit",
        args: [],
        dataSuffix: DATA_SUFFIX
      });

      void trackTransaction(APP_ID, APP_NAME, address, txHash);

      const receipt = await publicClient.waitForTransactionReceipt({
        hash: txHash
      });

      let parsedTotal: bigint | undefined;
      for (const log of receipt.logs) {
        try {
          const parsed = decodeEventLog({
            abi: baseHabitTrackerAbi,
            eventName: "HabitDone",
            topics: log.topics,
            data: log.data
          });
          if (parsed.eventName === "HabitDone") {
            parsedTotal = parsed.args.total as bigint;
            break;
          }
        } catch {
          continue;
        }
      }

      return { txHash, parsedTotal };
    } catch (error) {
      const fallback = "Transaction failed. Please try again.";
      setErrorMessage(
        error instanceof Error && error.message ? error.message : fallback
      );
      throw error;
    } finally {
      setIsPending(false);
    }
  }, [address, publicClient, writeContractAsync]);

  return {
    isPending,
    errorMessage,
    completeHabitTracked
  };
}
