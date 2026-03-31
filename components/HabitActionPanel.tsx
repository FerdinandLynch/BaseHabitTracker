type HabitActionPanelProps = {
  disabled?: boolean;
  loading?: boolean;
  onComplete: () => void;
};

export function HabitActionPanel({
  disabled,
  loading,
  onComplete
}: HabitActionPanelProps) {
  return (
    <section className="action-panel">
      <button
        className="complete-btn"
        type="button"
        onClick={onComplete}
        disabled={disabled || loading}
      >
        {loading ? "Submitting on-chain..." : "Complete Habit"}
      </button>
    </section>
  );
}
