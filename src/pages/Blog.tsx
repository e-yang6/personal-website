import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { SidebarTabs } from "@/components/SidebarTabs";

interface BlogProps {
  showIntro?: boolean;
}

const Blog = ({ showIntro = false }: BlogProps) => {
  return (
    <>
      <SidebarTabs showIntro={showIntro} />
      {/* Theme Switcher - Fixed Top Right */}
      <div className="fixed top-4 right-4 z-20 pointer-events-auto">
        <ThemeSwitcher />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 min-h-screen w-full pl-32 md:pl-40">
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-sm text-muted-foreground">
            Coming soon!
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;

