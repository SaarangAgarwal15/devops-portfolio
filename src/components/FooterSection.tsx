import { portfolioData } from "@/data/portfolio";

const FooterSection = () => {
  const { name, contact } = portfolioData;

  return (
    <footer className="py-12 flex flex-col md:flex-row justify-between items-center font-mono text-[10px] text-muted-foreground uppercase tracking-widest gap-4">
      <p>© 2025 {name}</p>
      <a
        href={`mailto:${contact.email}`}
        className="hover:text-primary transition-colors"
      >
        {contact.email}
      </a>
    </footer>
  );
};

export default FooterSection;
