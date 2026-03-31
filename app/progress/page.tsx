"use client";

import Link from "next/link";
import { BottomNav } from "@/components/BottomNav";
import { HabitHeader } from "@/components/HabitHeader";
import { ProgressCard } from "@/components/ProgressCard";
import { StatusChip } from "@/components/StatusChip";
import { WalletButton } from "@/components/WalletButton";
import { useHabitStatus } from "@/hooks/useHabitStatus";

export default function ProgressPage() {
  const { address, isConnected, countLabel, isLoading } = useHabitStatus();

  return (
    <main className="page-shell">
      <div className="mobile-wrap">
        <HabitHeader
          title="Progress Proof"
          subtitle="Your completion total is read directly from on-chain count."
        />
        <section className="panel">
          <div className="panel-top">
            <StatusChip
              label={isConnected ? "Wallet connected" : "Connect wallet to view your progress"}
              tone={isConnected ? "ok" : "warn"}
            />
            <WalletButton />
          </div>
          {isConnected ? (
            <ProgressCard address={address} count={isLoading ? "..." : countLabel} />
          ) : (
            <p className="muted">Connect wallet to view your progress.</p>
          )}
          <Link href="/" className="ghost-btn">
            Back to Check Page
          </Link>
        </section>
        <BottomNav />
      </div>
    </main>
  );
}
