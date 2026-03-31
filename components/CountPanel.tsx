type CountPanelProps = {
  label: string;
  count: string;
};

export function CountPanel({ label, count }: CountPanelProps) {
  return (
    <section className="count-panel">
      <p>{label}</p>
      <strong>{count}</strong>
    </section>
  );
}
