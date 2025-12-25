import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileHeaderProps {
  name: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
}

export const ProfileHeader = ({ name, title, subtitle, imageUrl }: ProfileHeaderProps) => {
  const [displayName, setDisplayName] = useState(name);
  const [isChinese, setIsChinese] = useState(false);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const toggleName = () => {
    if (isChinese) {
      setDisplayName(name);
      setIsChinese(false);
    } else {
      setDisplayName("杨亦清");
      setIsChinese(true);
    }
  };

  const initials = isChinese 
    ? displayName[0] 
    : displayName
        .split(" ")
        .map((n) => n[0])
        .join("");

  const handleResumeDownload = () => {
    const resumeUrl = "https://raw.githubusercontent.com/e-yang6/personal-resume/main/Ethan_Yang_Resume.pdf";
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="flex items-start justify-start gap-6 mb-12">
        <div className="relative flex-shrink-0">
          <div 
            className="relative w-32 h-32 md:w-36 md:h-36 rounded-full border-[0.75px] border-border p-1.5 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => imageUrl && setIsImageEnlarged(true)}
          >
            <GlowingEffect
              spread={30}
              glow={true}
              disabled={false}
              proximity={120}
              inactiveZone={0.2}
              borderWidth={3}
            />
            <Avatar className="relative w-full h-full border-[0.75px] border-border overflow-hidden z-10 rounded-full">
              {imageUrl && <AvatarImage src={imageUrl} alt={displayName} />}
              <AvatarFallback className="bg-secondary text-2xl md:text-3xl">{initials}</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="text-left flex-1">
          <h1 
            className={`text-3xl md:text-4xl font-bold mb-3 tracking-tight text-foreground cursor-pointer hover:opacity-80 transition-opacity ${!isChinese ? 'uppercase' : ''}`}
            style={{
              textShadow: '0 0 10px rgba(221, 123, 187, 0.3), 0 0 20px rgba(221, 123, 187, 0.2), 0 0 30px rgba(221, 123, 187, 0.1)'
            }}
            onClick={toggleName}
          >
            {displayName}
          </h1>
          <p className="text-muted-foreground text-sm md:text-base font-medium mb-4">
            {title} • {subtitle}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <Button
              variant="outline"
              asChild
              size="sm"
              className="rounded-lg hover:bg-accent transition-all duration-200"
            >
              <a
                href="mailto:ethn.yang@mail.utoronto.ca"
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              size="sm"
              className="rounded-lg hover:bg-accent transition-all duration-200"
            >
              <a
                href="https://github.com/e-yang6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              size="sm"
              className="rounded-lg hover:bg-accent transition-all duration-200"
            >
              <a
                href="https://linkedin.com/in/ey6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 rounded-lg hover:bg-accent transition-all duration-200"
              onClick={handleResumeDownload}
            >
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </div>
        </div>
      </div>

    {/* Enlarged Profile Picture Dialog */}
    {imageUrl && (
      <Dialog open={isImageEnlarged} onOpenChange={setIsImageEnlarged}>
        <DialogContent className="max-w-4xl w-auto max-h-[90vh] p-4 pt-12">
          <div className="flex items-center justify-center relative">
            <img 
              src={imageUrl} 
              alt={displayName}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    )}
    </>
  );
};
