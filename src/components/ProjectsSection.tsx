import { useState } from "react";
import { ChevronRight, Github, ZoomIn, ChevronLeft, ExternalLink } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  imageUrls?: string[];
  fullWidth?: boolean;
}

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [enlargedImageUrl, setEnlargedImageUrl] = useState<string | null>(null);
  const [enlargedImageUrls, setEnlargedImageUrls] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "Chameleon Royale",
      description: "A Clash Royale themed social deduction game built around bluffing, clues, and deception. A party game where you try to catch the Chameleon hiding among Clash Royale cards.",
      technologies: ["React", "TypeScript"],
      githubUrl: "https://github.com/e-yang6/chameleon-royale",
      liveUrl: "https://chameleon-royale.vercel.app",
    },
    {
      title: "tailwind (NOT the css framework)",
      description: "A Valorant companion tool for viewing player info and auto-locking agents. Features include viewing all players in pre-game, seeing which side you're on, and auto-locking agents instantly.",
      technologies: ["Python", "tkinter"],
      githubUrl: "https://github.com/e-yang6/tailwind",
    },
    {
      title: "QuantiFi",
      description: "Third place winner in UofT UTEFA QuantiFi 2025 algorithmic trading competition. Quantitative trading strategy that uses statistical analysis, backtesting, and risk management techniques.",
      technologies: ["Python"],
      githubUrl: "https://github.com/e-yang6/quantifi",
      imageUrl: "/quantifi.png",
    },
    {
      title: "Stop! Don't Go On",
      description: "GoOnHacks 2025 finalist. Computer vision accountability app that detects bad habits and intervenes with screen alerts, countdown timers, and math challenges.",
      technologies: ["React", "TypeScript", "Python", "Flask", "OpenCV"],
      githubUrl: "https://github.com/e-yang6/stop-dont-go-on",
      imageUrl: "/stop-dont-go-on.gif",
    },
    {
      title: "binder.",
      description: "Tinder-inspired marketplace browser for Kijiji with swipe-based interface, Python scraper, and AI-powered price evaluation using Gemini API.",
      technologies: ["TypeScript", "React", "Tailwind CSS", "Python", "Gemini API"],
      githubUrl: "https://github.com/e-yang6/binder",
      imageUrl: "/binder.gif",
    },
    {
      title: "Stock Price Simulation and Risk Analysis",
      description: "Monte Carlo simulations to model Geometric Brownian Motion and forecast stock price paths with visualization of outputs and return distributions.",
      technologies: ["C++", "Python", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/e-yang6/MonteCarloSimulation",
      imageUrls: ["/stock-simulation-1.png", "/stock-simulation-2.png"],
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
            <div key={index} className={`relative min-h-[14rem] ${project.fullWidth ? 'md:col-span-2' : ''}`}>
              <div 
                className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 transition-all duration-200 hover:shadow-md hover:scale-[1.02] cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
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
                        <div className="text-muted-foreground/60 flex-shrink-0">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                      <p className="font-sans text-base leading-[1.6] md:text-[15px] md:leading-[1.7] text-muted-foreground">
                        {project.description}
                      </p>
                      <p className="text-sm text-muted-foreground/75">
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

      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-base pt-2">
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {selectedProject?.imageUrls && selectedProject.imageUrls.length > 0 ? (
              <div className="space-y-2">
                <div 
                  className="relative w-full h-64 rounded-lg overflow-hidden border border-border bg-muted cursor-pointer group"
                  onClick={(e) => {
                    e.stopPropagation();
                    setEnlargedImageUrls(selectedProject.imageUrls || []);
                    setCurrentImageIndex(0);
                  }}
                >
                  <img 
                    src={selectedProject.imageUrls[0]} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  {selectedProject.imageUrls.length > 1 && (
                    <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                      {selectedProject.imageUrls.length} images
                    </div>
                  )}
                </div>
              </div>
            ) : selectedProject?.imageUrl ? (
              <div 
                className="relative w-full h-64 rounded-lg overflow-hidden border border-border bg-muted cursor-pointer group"
                onClick={(e) => {
                  e.stopPropagation();
                  setEnlargedImageUrl(selectedProject.imageUrl || null);
                }}
              >
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ) : (
              <div className="w-full h-64 rounded-lg border border-border bg-muted flex items-center justify-center">
                <p className="text-muted-foreground text-sm">No image available</p>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {selectedProject?.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-2 flex gap-2">
              {selectedProject?.githubUrl && (
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>
                </Button>
              )}
              {selectedProject?.liveUrl && (
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Enlarged Image Dialog - Single Image */}
      <Dialog open={enlargedImageUrl !== null && enlargedImageUrls.length === 0} onOpenChange={(open) => !open && setEnlargedImageUrl(null)}>
        <DialogContent className="max-w-6xl w-auto max-h-[90vh] p-4 pt-12">
          <div className="flex items-center justify-center relative">
            {enlargedImageUrl && (
              <img 
                src={enlargedImageUrl} 
                alt="Enlarged view"
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Enlarged Image Dialog - Multiple Images with Navigation */}
      <Dialog open={enlargedImageUrls.length > 0} onOpenChange={(open) => !open && (setEnlargedImageUrls([]), setCurrentImageIndex(0))}>
        <DialogContent className="max-w-6xl w-auto max-h-[90vh] p-4 pt-12">
          <div className="flex items-center justify-center relative">
            {enlargedImageUrls.length > 0 && (
              <>
                {enlargedImageUrls.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((prev) => (prev === 0 ? enlargedImageUrls.length - 1 : prev - 1));
                      }}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((prev) => (prev === enlargedImageUrls.length - 1 ? 0 : prev + 1));
                      }}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  </>
                )}
                <img 
                  src={enlargedImageUrls[currentImageIndex]} 
                  alt={`Enlarged view ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                />
                {enlargedImageUrls.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded">
                    {currentImageIndex + 1} / {enlargedImageUrls.length}
                  </div>
                )}
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
