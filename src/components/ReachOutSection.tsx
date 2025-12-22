import { ArrowRight } from "lucide-react";

export const ReachOutSection = () => {
  const reasons = [
    {
      title: "Are looking for a developer",
      description: "I'm open to internships, co-op positions, and opportunities in Software Engineering, Product Management, Finance, and Full-Stack Development",
    },
    {
      title: "Are interested in collaborating",
      description: "Excited to work on interesting projects, hackathons, or open-source contributions.",
    },
    {
      title: "Want to discuss technology",
      description: "Enjoy talking about new tech, engineering challenges, and sharing knowledge.",
    },
    {
      title: "Have a project idea",
      description: "Looking to collaborate on projects or brainstorm ideas together.",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
          <span>◆</span> Please reach out if you:
        </h2>
        <div className="space-y-5">
          {reasons.map((item, index) => (
            <div key={index} className="flex gap-4 group">
              <ArrowRight className="w-4 h-4 text-foreground mt-1.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2.5 text-base md:text-lg">{item.title}</h3>
                <p className="text-base md:text-[15px] text-muted-foreground leading-[1.7] md:leading-[1.75]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

