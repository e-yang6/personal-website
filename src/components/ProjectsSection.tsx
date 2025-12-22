import { ExternalLink } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "QuantiFi",
      description: "Third place winner in UofT UTEFA QuantiFi 2025 algorithmic trading competition. Quantitative trading strategy that uses statistical analysis, backtesting, and risk management techniques.",
      technologies: ["Python"],
      githubUrl: "https://github.com/e-yang6/quantifi",
    },
    {
      title: "Stop! Don't Go On",
      description: "GoOnHacks 2025 finalist. Computer vision accountability app that detects bad habits and intervenes with screen alerts, countdown timers, and math challenges.",
      technologies: ["React", "TypeScript", "Python", "Flask", "OpenCV"],
      githubUrl: "https://github.com/e-yang6/stop-dont-go-on",
    },
    {
      title: "binder.",
      description: "Tinder-inspired marketplace browser for Kijiji with swipe-based interface, Python scraper, and AI-powered price evaluation using Gemini API.",
      technologies: ["TypeScript", "React", "Tailwind CSS", "Python", "Gemini API"],
      githubUrl: "https://github.com/e-yang6/binder",
    },
    {
      title: "Stock Price Simulation and Risk Analysis",
      description: "Monte Carlo simulations to model Geometric Brownian Motion and forecast stock price paths with visualization of outputs and return distributions.",
      technologies: ["C++", "Python", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/e-yang6/MonteCarloSimulation",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span>◆</span> Projects:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="relative min-h-[14rem]">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 transition-all duration-200 hover:shadow-md hover:scale-[1.02] cursor-pointer">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                  <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground flex-1">
                          {project.title}
                        </h3>
                        {(project.githubUrl || project.liveUrl) && (
                          <a
                            href={project.liveUrl || project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                        {project.description}
                      </p>
                      <p className="text-xs text-muted-foreground/70">
                        {project.technologies.join(" • ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
