import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarTabsProps {
  showIntro?: boolean;
}

export const SidebarTabs = ({ showIntro = false }: SidebarTabsProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    {
      id: "home",
      label: "Home",
      path: "/",
    },
    {
      id: "blog",
      label: "Blog",
      path: "/blog",
    },
    {
      id: "chatbox",
      label: "Chatbox",
      url: "https://my.cbox.ws/ethanyangdev",
    },
  ];

  const isActive = (path?: string) => {
    if (!path) return false;
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const handleTabClick = (tab: typeof tabs[0]) => {
    if (showIntro) return;
    
    if (tab.url) {
      // Open popup for external links
      window.open(tab.url, "chatbox", "width=800,height=600,scrollbars=yes,resizable=yes");
    } else if (tab.path) {
      // Navigate for internal paths
      navigate(tab.path);
    }
  };

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full w-32 md:w-40 z-30",
      showIntro ? "pointer-events-none" : "pointer-events-auto"
    )}>
      <div className="h-full flex flex-col items-start py-8 px-6 gap-6">
        {tabs.map((tab) => {
          const active = isActive(tab.path);
          
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              disabled={showIntro}
              className={cn(
                "text-left transition-all duration-300 ease-in-out",
                showIntro && "cursor-not-allowed opacity-50",
                active
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

