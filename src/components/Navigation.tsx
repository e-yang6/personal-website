import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const sections = [
    { id: "about", label: "About me" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <nav className="flex gap-2 justify-center mb-12 flex-wrap">
      {sections.map((section) => (
        <Button
          key={section.id}
          variant={activeSection === section.id ? "secondary" : "ghost"}
          onClick={() => onSectionChange(section.id)}
          className="text-sm"
        >
          {section.label}
        </Button>
      ))}
    </nav>
  );
};
