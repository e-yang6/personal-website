import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface ProfileHeaderProps {
  name: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
}

export const ProfileHeader = ({ name, title, subtitle, imageUrl }: ProfileHeaderProps) => {
  const [displayName, setDisplayName] = useState(name);
  const [isChinese, setIsChinese] = useState(false);

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

  return (
    <div className="flex items-center justify-start gap-6 mb-12">
      <div className="relative flex-shrink-0">
        <div className="relative w-24 h-24 rounded-full border-[0.75px] border-border p-1.5">
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
            <AvatarFallback className="bg-secondary text-2xl">{initials}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="text-left">
        <h1 
          className={`text-3xl md:text-4xl font-bold mb-3 tracking-tight text-foreground cursor-pointer hover:opacity-80 transition-opacity ${!isChinese ? 'uppercase' : ''}`}
          style={{
            textShadow: '0 0 10px rgba(221, 123, 187, 0.3), 0 0 20px rgba(221, 123, 187, 0.2), 0 0 30px rgba(221, 123, 187, 0.1)'
          }}
          onClick={toggleName}
        >
          {displayName}
        </h1>
        <p className="text-muted-foreground text-sm md:text-base font-medium">
          {title} • {subtitle}
        </p>
      </div>
    </div>
  );
};
