type ProgressCardProps = {
  address?: string;
  count: string;
};

function shortAddress(address?: string) {
  if (!address) return "Not connected";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function ProgressCard({ address, count }: ProgressCardProps) {
  return (
    <article className="progress-card">
      <p className="card-label">Progress proof</p>
      <h2>{count}</h2>
      <p className="card-sub">Current on-chain completions</p>
      <div className="card-row">
        <span>Wallet</span>
        <strong>{shortAddress(address)}</strong>
      </div>
    </article>
  );
}
