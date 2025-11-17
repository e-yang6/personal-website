import { useEffect, useRef } from "react";
import { ProfileHeader } from "@/components/ProfileHeader";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ReachOutSection } from "@/components/ReachOutSection";
import { ContactSection } from "@/components/ContactSection";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        url?: string;
      }, HTMLElement>;
    }
  }
}

const Index = () => {
  const splineContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = splineContainerRef.current;
    if (!container) return;

    let cleanup: (() => void) | null = null;
    let retryTimeout: ReturnType<typeof setTimeout> | null = null;

    // Wait for spline-viewer to be mounted
    const setupSplineListeners = () => {
      const splineViewer = container.querySelector('spline-viewer') as HTMLElement;
      if (!splineViewer) {
        // Retry after a short delay if not found
        retryTimeout = setTimeout(setupSplineListeners, 100);
        return;
      }

      // Prevent drag events on Spline viewer but allow cursor tracking
      const handleDragStart = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
      };

      // Prevent dragging by stopping drag events, but allow all mouse events for cursor tracking
      // The Spline needs mousemove events to track cursor, so we don't interfere with those
      splineViewer.addEventListener('dragstart', handleDragStart);
      splineViewer.addEventListener('drag', handleDragStart);

      cleanup = () => {
        splineViewer.removeEventListener('dragstart', handleDragStart);
        splineViewer.removeEventListener('drag', handleDragStart);
      };
    };

    setupSplineListeners();

    return () => {
      if (retryTimeout) {
        clearTimeout(retryTimeout);
      }
      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  return (
    <div className="min-h-screen text-foreground relative overflow-y-auto">
      {/* Spline Background */}
      <div 
        ref={splineContainerRef}
        className="fixed inset-0 z-0"
        style={{ 
          width: '100%', 
          height: '100%',
          userSelect: 'none',
        }}
        onContextMenu={(e) => e.preventDefault()}
      >
        <spline-viewer
          url="https://prod.spline.design/uQo9WSYVHpKFb8AP/scene.splinecode"
          style={{ 
            width: '100%', 
            height: '100%',
          }}
        />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 min-h-screen bg-background/50 pointer-events-none">
        <div className="max-w-3xl mx-auto px-6 py-12 pointer-events-auto">
          <ProfileHeader
            name="Ethan Yang"
            title="Bachelor of Applied Science in Computer Engineering"
            subtitle="University of Toronto"
            imageUrl="/profile.jpg"
          />
          
          {/* Theme Switcher */}
          <div className="flex justify-center mb-12 -mt-4">
            <ThemeSwitcher />
          </div>
          
          <div className="space-y-16">
            <AboutSection />
            <ProjectsSection />
            <ReachOutSection />
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
