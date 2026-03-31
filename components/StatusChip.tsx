type StatusChipProps = {
  label: string;
  tone?: "neutral" | "ok" | "warn" | "error";
};

export function StatusChip({ label, tone = "neutral" }: StatusChipProps) {
  return <span className={`status-chip status-chip-${tone}`}>{label}</span>;
}
