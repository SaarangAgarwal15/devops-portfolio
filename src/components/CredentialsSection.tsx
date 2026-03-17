import { portfolioData } from "@/data/portfolio";

const CredentialsSection = () => {
  const { education, certifications } = portfolioData;

  return (
    <section className="py-24 grid grid-cols-1 md:grid-cols-12 gap-8 section-divider">
      <div className="md:col-span-4">
        <h2 className="section-label">Credentials</h2>
      </div>
      <div className="md:col-span-8 space-y-12">
        {/* Education */}
        <div>
          <h4 className="font-mono text-[10px] text-muted-foreground uppercase mb-4 tracking-widest">
            Education
          </h4>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.institution}>
                <p className="font-medium">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">
                  {edu.degree
                    ? `${edu.degree} • ${edu.status} (Expected ${edu.expected_graduation})`
                    : edu.level}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h4 className="font-mono text-[10px] text-muted-foreground uppercase mb-4 tracking-widest">
            Certifications
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {certifications.map((cert) => (
              <li key={cert} className="cert-card">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
