import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface SidebarTabsProps {
  showIntro?: boolean;
}

export const SidebarTabs = ({ showIntro = false }: SidebarTabsProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      setMobileMenuOpen(false);
    }
  };

  const TabButton = ({ tab }: { tab: typeof tabs[0] }) => {
    const active = isActive(tab.path);
    return (
      <button
        onClick={() => handleTabClick(tab)}
        disabled={showIntro}
        className={cn(
          "text-left transition-all duration-300 ease-in-out py-2 px-3 rounded-md w-full",
          showIntro && "cursor-not-allowed opacity-50",
          active
            ? "text-foreground font-medium bg-secondary"
            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
        )}
      >
        {tab.label}
      </button>
    );
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={cn(
        "fixed left-0 top-0 h-full w-32 md:w-40 z-30 hidden md:block",
        showIntro ? "pointer-events-none" : "pointer-events-auto"
      )}>
        <div className="h-full flex flex-col items-start py-8 px-6 gap-6">
          {tabs.map((tab) => (
            <TabButton key={tab.id} tab={tab} />
          ))}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className={cn(
        "fixed top-4 left-4 z-30 md:hidden",
        showIntro && "pointer-events-none opacity-50"
      )}>
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10"
              disabled={showIntro}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <div className="flex flex-col gap-4 mt-8">
              <h2 className="text-lg font-semibold mb-2">Navigation</h2>
              {tabs.map((tab) => (
                <TabButton key={tab.id} tab={tab} />
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

