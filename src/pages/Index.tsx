import { ProfileHeader } from "@/components/ProfileHeader";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <ProfileHeader
          name="Ethan Yang"
          title="Bachelors of Applied Science in Computer Engineering"
          subtitle="University of Toronto"
        />
        
        <div className="space-y-16">
          <AboutSection />
          <ProjectsSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
