import { BottomNav } from "@/components/BottomNav";
import { HabitHeader } from "@/components/HabitHeader";
import { RuleList } from "@/components/RuleList";

export default function AboutPage() {
  return (
    <main className="page-shell">
      <div className="mobile-wrap">
        <HabitHeader
          title="About This App"
          subtitle="A simple and honest on-chain habit completion tracker."
        />
        <section className="panel">
          <RuleList />
        </section>
        <BottomNav />
      </div>
    </main>
  );
}
