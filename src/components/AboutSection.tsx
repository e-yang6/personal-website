import { ArrowRight } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      title: "Computer Engineering Student",
      description: "Bachelor of Applied Science at University of Toronto. Building foundations in hardware and software systems.",
    },
    {
      title: "Web Developer",
      description: "Working with modern web technologies including React, TypeScript, Python, and exploring full-stack development.",
    },
    {
      title: "Quant Projects",
      description: "Building quantitative finance projects including Monte Carlo simulations, risk analysis, and algorithmic trading strategies.",
    },
    {
      title: "Problem Solver",
      description: "Focused on creating clean, maintainable solutions to technical challenges through thoughtful code design.",
    },
    {
      title: "Continuous Learner",
      description: "Always exploring new technologies and approaches to stay current with software development practices.",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
          <span>◆</span> What makes me different:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="flex gap-4 group">
              <ArrowRight className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2 text-base">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
