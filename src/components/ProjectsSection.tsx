import { ExternalLink, Github } from "lucide-react";

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
      title: "Stop! Don't Go On",
      description: "GoOnHacks 2025 finalist. Computer vision accountability app that detects bad habits and intervenes with screen alerts, countdown timers, and math challenges. Includes optional Arduino hardware integration with servo-controlled camera tracking and water spray deterrent.",
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
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="border-l-2 border-border pl-4 space-y-2">
              <div className="flex items-start gap-2">
                <p className="text-foreground flex-1">
                  <span className="font-semibold">{project.title}</span>: {project.description}
                </p>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live site`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-sm text-muted-foreground ml-4">
                • {project.technologies.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
