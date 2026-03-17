import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import LeadershipSection from "@/components/LeadershipSection";
import CredentialsSection from "@/components/CredentialsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12">
      <HeroSection />
      <main>
        <ProjectsSection />
        <SkillsSection />
        <LeadershipSection />
        <CredentialsSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
