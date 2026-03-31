"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import { CountPanel } from "@/components/CountPanel";
import { HabitActionPanel } from "@/components/HabitActionPanel";
import { HabitHeader } from "@/components/HabitHeader";
import { StatusChip } from "@/components/StatusChip";
import { WalletButton } from "@/components/WalletButton";
import { useHabitStatus } from "@/hooks/useHabitStatus";
import { useTrackedHabit } from "@/hooks/useTrackedHabit";

function shortHash(hash?: string) {
  if (!hash) return "";
  return `${hash.slice(0, 10)}...${hash.slice(-6)}`;
}

export default function HomePage() {
  const router = useRouter();
  const { address, isConnected, countLabel, refresh, setOptimisticTotal } =
    useHabitStatus();
  const { completeHabitTracked, isPending, errorMessage } = useTrackedHabit();
  const [txHash, setTxHash] = useState<string | undefined>(undefined);
  const [notice, setNotice] = useState<string>("Ready");

  useEffect(() => {
    if (isConnected) {
      void refresh();
    }
  }, [isConnected, refresh]);

  const walletStatus = useMemo(() => {
    if (!isConnected) return "Wallet disconnected";
    return `Connected: ${address?.slice(0, 6)}...${address?.slice(-4)}`;
  }, [address, isConnected]);

  const onComplete = async () => {
    try {
      setNotice("Submitting transaction...");
      const result = await completeHabitTracked();
      setTxHash(result.txHash);

      if (result.parsedTotal !== undefined) {
        setOptimisticTotal(result.parsedTotal);
        setNotice(`Count updated to ${result.parsedTotal.toString()}`);
      } else {
        setNotice("Habit recorded. Your on-chain progress has been updated.");
      }

      await refresh();
      router.push("/progress");
    } catch {
      setNotice("Transaction failed. Please retry.");
    }
  };

  return (
    <main className="page-shell">
      <div className="mobile-wrap">
        <HabitHeader
          title="Daily Chain Check"
          subtitle="Complete once, record once, and build steady on-chain proof."
        />
        <section className="panel">
          <div className="panel-top">
            <StatusChip label={walletStatus} tone={isConnected ? "ok" : "warn"} />
            <WalletButton />
          </div>
          <CountPanel label="Current completion count" count={countLabel} />
          <HabitActionPanel
            onComplete={onComplete}
            loading={isPending}
            disabled={!isConnected}
          />
          <div className="feedback">
            <p>{isPending ? "Transaction submitting..." : notice}</p>
            {txHash ? <p>Tx: {shortHash(txHash)}</p> : null}
            {errorMessage ? <p className="error-text">{errorMessage}</p> : null}
          </div>
        </section>
        <BottomNav />
      </div>
    </main>
  );
}
