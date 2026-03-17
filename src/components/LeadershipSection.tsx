import { portfolioData } from "@/data/portfolio";

const LeadershipSection = () => {
  const { leadership } = portfolioData;

  return (
    <section className="py-24 grid grid-cols-1 md:grid-cols-12 gap-8 section-divider">
      <div className="md:col-span-4">
        <h2 className="section-label">Leadership</h2>
      </div>
      <div className="md:col-span-8">
        {leadership.map((item) => (
          <div key={item.role}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
              <h3 className="text-xl font-medium">{item.role}</h3>
              <span className="font-mono text-xs text-muted-foreground">
                {item.organization}
              </span>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {item.responsibilities.map((r) => (
                <li key={r} className="flex items-start">
                  <span className="mr-2 text-primary shrink-0">→</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipSection;
