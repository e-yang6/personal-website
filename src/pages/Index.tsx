import { ProfileHeader } from "@/components/ProfileHeader";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ReachOutSection } from "@/components/ReachOutSection";
import { ContactSection } from "@/components/ContactSection";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Index = () => {
  return (
    <AuroraBackground className="min-h-screen overflow-y-auto">
      {/* Theme Switcher - Fixed Top Left */}
      <div className="fixed top-4 left-4 z-20 pointer-events-auto">
        <ThemeSwitcher />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 min-h-screen w-full">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <ProfileHeader
            name="Ethan Yang"
            title="Bachelor of Applied Science in Computer Engineering"
            subtitle="University of Toronto"
            imageUrl="/profile.jpg"
          />
          
          <div className="space-y-16">
            <AboutSection />
            <ProjectsSection />
            <ReachOutSection />
            <ContactSection />
          </div>
          
          {/* Footer Credit */}
          <div className="mt-12 pt-6 border-t border-border/30 text-center space-y-3">
            <p className="text-sm text-muted-foreground italic">
              "Nothing worth having comes easy" - Theodore Roosevelt
            </p>
            <p className="text-xs text-muted-foreground/70">
              Favicon by <a href="https://jeremyliu.vercel.app" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/80 hover:text-muted-foreground hover:underline transition-colors">Jeremy Liu</a>
            </p>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Index;
