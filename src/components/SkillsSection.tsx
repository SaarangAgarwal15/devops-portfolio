import { portfolioData } from "@/data/portfolio";

const skillCategories = [
  { key: "programming" as const, label: "Programming" },
  { key: "ai_ml" as const, label: "AI & ML" },
  { key: "backend_tools" as const, label: "Backend & Tools" },
  { key: "core_cs" as const, label: "Core CS" },
  { key: "system_concepts" as const, label: "System Concepts" },
];

const SkillsSection = () => {
  const { skills } = portfolioData;

  return (
    <section className="py-24 grid grid-cols-1 md:grid-cols-12 gap-8 section-divider">
      <div className="md:col-span-4">
        <h2 className="section-label">Technical Stack</h2>
      </div>
      <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
        {skillCategories.map(({ key, label }) => (
          <div key={key}>
            <h4 className="font-mono text-[10px] text-muted-foreground uppercase mb-4 tracking-widest">
              {label}
            </h4>
            <ul className="space-y-1 text-sm">
              {skills[key].map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
