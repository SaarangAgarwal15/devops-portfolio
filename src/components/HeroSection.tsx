import { portfolioData } from "@/data/portfolio";

const HeroSection = () => {
  const { name, contact, summary } = portfolioData;

  return (
    <header className="py-[15vh] grid grid-cols-1 md:grid-cols-12 gap-8 section-divider">
      <div className="md:col-span-8">
        <p className="font-mono text-primary text-sm mb-4 uppercase tracking-widest">
          Available for July 2027
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-medium mb-8">
          {name}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
          {summary}
        </p>
      </div>
      <div className="md:col-span-4 flex flex-col justify-end md:items-end space-y-2 font-mono text-sm">
        <a
          href={`mailto:${contact.email}`}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {contact.email}
        </a>
        <p className="text-muted-foreground">{contact.phone}</p>
      </div>
    </header>
  );
};

export default HeroSection;
