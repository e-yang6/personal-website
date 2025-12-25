import { AuroraBackground } from "@/components/ui/aurora-background";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { SidebarTabs } from "@/components/SidebarTabs";

const Blog = () => {
  return (
    <AuroraBackground className="min-h-screen overflow-y-auto">
      <SidebarTabs />
      {/* Theme Switcher - Fixed Top Right */}
      <div className="fixed top-4 right-4 z-20 pointer-events-auto">
        <ThemeSwitcher />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 min-h-screen w-full pl-32 md:pl-40 animate-fade-in">
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-sm text-muted-foreground">
            Coming soon!
          </p>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Blog;

