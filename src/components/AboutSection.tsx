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
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span>◆</span> What makes me different:
        </h2>
        <div className="space-y-4">
          {highlights.map((item, index) => (
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
