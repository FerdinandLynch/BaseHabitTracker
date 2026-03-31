type HabitHeaderProps = {
  title: string;
  subtitle: string;
};

export function HabitHeader({ title, subtitle }: HabitHeaderProps) {
  return (
    <header className="habit-header">
      <div className="brand-tag">BaseHabitTracker</div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}
