import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <div className="flex flex-col items-center gap-4 mb-12">
      <Avatar className="w-24 h-24 border-2 border-border">
        <AvatarImage src={imageUrl} alt={name} />
        <AvatarFallback className="bg-secondary text-2xl">{initials}</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-1 flex items-center gap-2 justify-center">
          <span className="text-foreground">◆</span>
          {name}
        </h1>
        <p className="text-muted-foreground text-sm">
          → {title}
        </p>
        <p className="text-muted-foreground text-xs mt-1">{subtitle}</p>
      </div>
    </div>
  );
};
