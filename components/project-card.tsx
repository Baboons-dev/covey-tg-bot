import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BrandTelegram } from "@/components/icons/brand-telegram";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  project: {
    name: string;
    image: string;
    tags: string[];
    telegramLink?: string;
    websiteLink?: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const link = project.websiteLink || project.telegramLink;
  const isWebsite = Boolean(project.websiteLink);

  return (
    <Card className="relative overflow-hidden group h-[400px] transition-all duration-300 hover:scale-[1.02] rounded-[2rem] shadow-xl border-0">
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="relative h-full p-6 flex flex-col justify-between">
        <div className="mt-4">
          <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-[#528385]/30 text-blue-100 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-[#528385]/20"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/90 hover:text-white bg-[#528385]/20 hover:bg-[#528385]/30 backdrop-blur-sm px-4 py-3 rounded-xl transition-all duration-200 group/button w-full justify-center border border-[#528385]/20"
        >
          {isWebsite ? (
            <>
              <ExternalLink className="w-5 h-5" />
              <span className="font-medium">Visit Website</span>
            </>
          ) : (
            <>
              <BrandTelegram className="w-5 h-5" />
              <span className="font-medium">Contact on Telegram</span>
            </>
          )}
        </a>
      </div>
    </Card>
  );
}