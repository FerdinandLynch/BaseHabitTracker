"use client";

import { useMemo } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

function shortAddress(address?: string) {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  const injected = useMemo(
    () => connectors.find((c) => c.id === "injected") ?? connectors[0],
    [connectors]
  );

  if (isConnected) {
    return (
      <button className="wallet-btn" onClick={() => disconnect()} type="button">
        {shortAddress(address)} - Disconnect
      </button>
    );
  }

  return (
    <button
      className="wallet-btn"
      onClick={() => injected && connect({ connector: injected })}
      type="button"
      disabled={!injected || isPending}
    >
      {isPending ? "Connecting..." : "Connect Wallet"}
    </button>
  );
}
