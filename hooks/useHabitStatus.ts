"use client";

import { useEffect, useMemo, useState } from "react";
import { useAccount, useReadContract } from "wagmi";
import {
  BASE_HABIT_TRACKER_ADDRESS,
  baseHabitTrackerAbi
} from "@/lib/contracts";

const LAST_TOTAL_KEY = "basehabittracker:lastTotal";

type UseHabitStatusResult = {
  address?: `0x${string}`;
  isConnected: boolean;
  count: bigint;
  countLabel: string;
  isLoading: boolean;
  isError: boolean;
  refresh: () => Promise<unknown>;
  optimisticTotal?: bigint;
  setOptimisticTotal: (value?: bigint) => void;
};

export function useHabitStatus(): UseHabitStatusResult {
  const { address, isConnected } = useAccount();
  const [optimisticTotal, setOptimisticTotal] = useState<bigint | undefined>(
    undefined
  );

  const readResult = useReadContract({
    address: BASE_HABIT_TRACKER_ADDRESS,
    abi: baseHabitTrackerAbi,
    functionName: "habitCount",
    args: address ? [address] : undefined,
    query: {
      enabled: Boolean(address)
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const cached = window.localStorage.getItem(LAST_TOTAL_KEY);
    if (cached && cached !== "") {
      setOptimisticTotal(BigInt(cached));
    }
  }, []);

  useEffect(() => {
    if (readResult.data !== undefined && typeof window !== "undefined") {
      window.localStorage.setItem(LAST_TOTAL_KEY, readResult.data.toString());
      setOptimisticTotal(readResult.data);
    }
  }, [readResult.data]);

  const count = useMemo(() => {
    if (readResult.data !== undefined) return readResult.data;
    if (optimisticTotal !== undefined) return optimisticTotal;
    return 0n;
  }, [optimisticTotal, readResult.data]);

  return {
    address,
    isConnected,
    count,
    countLabel: count.toString(),
    isLoading: readResult.isLoading,
    isError: readResult.isError,
    refresh: readResult.refetch,
    optimisticTotal,
    setOptimisticTotal
  };
}
