export const ReachOutSection = () => {
  const reasons = [
    {
      title: "Are looking for a developer",
      description: "I'm open to internships, co-op positions, and opportunities in software engineering and computer engineering.",
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
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span>◆</span> Please reach out if you:
        </h2>
        <div className="space-y-4">
          {reasons.map((item, index) => (
            <div key={index} className="border-l-2 border-border pl-4">
              <p className="text-foreground">
                <span className="font-semibold">{item.title}</span>: {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

