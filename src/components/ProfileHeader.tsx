import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface ProfileHeaderProps {
  name: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
}

export const ProfileHeader = ({ name, title, subtitle, imageUrl }: ProfileHeaderProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="flex items-center justify-center gap-6 mb-12">
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
            {imageUrl && <AvatarImage src={imageUrl} alt={name} />}
            <AvatarFallback className="bg-secondary text-2xl">{initials}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 uppercase tracking-tight text-foreground">
          {name}
        </h1>
        <p className="text-muted-foreground text-sm md:text-base font-medium">
          {title} • {subtitle}
        </p>
      </div>
    </div>
  );
};
