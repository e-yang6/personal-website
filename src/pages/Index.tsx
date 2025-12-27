import { ProfileHeader } from "@/components/ProfileHeader";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ReachOutSection } from "@/components/ReachOutSection";
import { ContactSection } from "@/components/ContactSection";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { SidebarTabs } from "@/components/SidebarTabs";
import { WebRing } from "@/components/WebRing";
import { cn } from "@/lib/utils";

interface IndexProps {
  showIntro?: boolean;
}

const Index = ({ showIntro = false }: IndexProps) => {
  return (
    <div
      className={cn(
        "transition-opacity duration-500",
        showIntro ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <SidebarTabs showIntro={showIntro} />
      {/* Theme Switcher - Fixed Top Right */}
      <div className="fixed top-4 right-4 z-20 pointer-events-auto">
        <ThemeSwitcher />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 min-h-screen w-full pl-32 md:pl-40">
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
          <div className="mt-12 pt-6 border-t border-border/30 text-center space-y-4">
            <div className="flex justify-center">
              <WebRing />
            </div>
            <p className="text-sm text-muted-foreground italic">
              "Nothing worth having comes easy" - Theodore Roosevelt
            </p>
            <p className="text-xs text-muted-foreground/70">
              Favicon and intro graffiti by <a href="https://jeremy-space.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/80 hover:text-muted-foreground hover:underline transition-colors">Jeremy Liu</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
