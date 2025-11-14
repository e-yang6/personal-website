export const AboutSection = () => {
  const highlights = [
    {
      title: "Computer Engineering Student",
      description: "Bachelors of Applied Science at University of Toronto. Building strong foundations in hardware and software systems.",
    },
    {
      title: "Full-Stack Developer",
      description: "Experience with modern web technologies including React, TypeScript, Node.js, and cloud platforms.",
    },
    {
      title: "Problem Solver",
      description: "Passionate about creating elegant solutions to complex problems through clean code and innovative thinking.",
    },
    {
      title: "Continuous Learner",
      description: "Always exploring new technologies and methodologies to stay at the forefront of engineering innovation.",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span>◆</span> What makes me different:
        </h2>
        <div className="space-y-4">
          {highlights.map((item, index) => (
            <div key={index} className="border-l-2 border-border pl-4">
              <p className="text-foreground">
                <span className="text-muted-foreground">→</span>{" "}
                <span className="font-semibold">{item.title}</span> → {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
