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
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and experience. Built with React and modern web technologies.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and real-time inventory management.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "WebSockets"],
      githubUrl: "#",
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <span>◆</span> Building:
      </h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border-l-2 border-border pl-4 space-y-2">
            <div className="flex items-start gap-2 flex-wrap">
              <p className="text-foreground flex-1">
                <span className="text-muted-foreground">→</span>{" "}
                <span className="font-semibold">{project.title}</span> → {project.description}
              </p>
              <div className="flex gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground ml-4">
              • {project.technologies.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
