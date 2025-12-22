import { Mail, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  const contacts = [
    {
      label: "Email",
      value: "ethn.yang@mail.utoronto.ca",
      href: "mailto:ethn.yang@mail.utoronto.ca",
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "github.com/e-yang6",
      href: "https://github.com/e-yang6",
      icon: Github,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ey6",
      href: "https://linkedin.com/in/ey6",
      icon: Linkedin,
    },
  ];

  const handleResumeDownload = () => {
    const resumeUrl = "https://raw.githubusercontent.com/e-yang6/personal-resume/main/Ethan_Yang_Resume.pdf";
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
          <span>◆</span> Contact:
        </h2>
        <div className="space-y-6">
          <p className="text-foreground leading-relaxed">
            Seeking Summer 2026 opportunities in Software Engineering, Product Management, Finance, and Full-Stack Development.
          </p>
          <div className="flex flex-wrap gap-3">
            {contacts.map((contact, index) => (
              <Button
                key={index}
                variant="outline"
                asChild
                className="rounded-lg hover:bg-accent transition-all duration-200"
              >
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2"
                >
                  <contact.icon className="w-4 h-4" />
                  {contact.label}
                </a>
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={handleResumeDownload}
              className="flex items-center gap-2 rounded-lg hover:bg-accent transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

