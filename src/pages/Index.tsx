import { useState } from "react";
import { ProfileHeader } from "@/components/ProfileHeader";
import { Navigation } from "@/components/Navigation";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <ProfileHeader
          name="Ethan Yang"
          title="Bachelors of Applied Science in Computer Engineering"
          subtitle="University of Toronto"
        />
        
        <Navigation 
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        <div className="animate-in fade-in duration-500">
          {activeSection === "about" && <AboutSection />}
          {activeSection === "projects" && <ProjectsSection />}
        </div>
      </div>
    </div>
  );
};

export default Index;
