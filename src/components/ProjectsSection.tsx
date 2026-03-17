import { portfolioData } from "@/data/portfolio";

const ProjectsSection = () => {
  const { projects } = portfolioData;

  return (
    <section className="py-24 section-divider">
      <h2 className="section-label mb-16">Selected Projects</h2>
      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, i) => (
          <article
            key={project.name}
            className={`grid grid-cols-1 md:grid-cols-12 gap-4 ${
              i > 0 ? "pt-12 border-t border-border" : ""
            }`}
          >
            <div className="md:col-span-4">
              <h3 className="text-2xl font-medium">{project.name}</h3>
              <p className="font-mono text-xs text-primary mt-2">
                {project.tech}
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="text-muted-foreground mb-6 text-lg">
                {project.description}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground">
                {project.details.map((detail) => (
                  <li key={detail} className="flex items-start">
                    <span className="mr-2 text-primary shrink-0">→</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
