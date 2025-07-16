import { useState } from "react";
import { Card } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { PostsByPersonas } from "@/types/aiTypes";
import { Badge } from "@/components/ui/badge";

type Props = {
  post: PostsByPersonas;
};

export const PostCard = ({ post }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const MAX_CHARS = 100;

  const renderDescription = () => {
    if (post.descricao.length <= MAX_CHARS || expanded) {
      return post.descricao;
    }
    return post.descricao.slice(0, MAX_CHARS) + "...";
  };

  return (
    <Card className="bg-transparent rounded-md overflow-hidden border-none shadow-sm transition hover:shadow-md text-white">
      <div className="flex items-center gap-3 p-4">
        <Avatar>
          <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${post.personaId}`} />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-sm ">Persona #{post.personaId.slice(0, 4)} - {post.title}</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {new Date(post.createdAt).toLocaleDateString("pt-BR")}
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-square">
        <img src={post.imagem} alt={post.title} className="object-cover" />
      </div>

      <div className="p-4 space-y-2">
        <div className="flex flex-col space-y-1">
          <span className="font-medium text-sm">Persona #{post.personaId.slice(0, 4)}</span>
          <h3 className="text-sm font-light">{post.title}</h3>
          <p className="text-sm font-light leading-tight">
            {post.descricao.length > MAX_CHARS && expanded ? (
              <span>
                {post.descricao}
                <button className="text-blue-500 text-xs font-medium ml-1" onClick={() => setExpanded(!expanded)}>
                  ver menos
                </button>
              </span>
            ) : (
              <span>
                {renderDescription()}
                <button className="text-blue-500 text-xs font-medium ml-1" onClick={() => setExpanded(!expanded)}>
                  {post.descricao.length > MAX_CHARS ? "ver mais" : ""}
                </button>
              </span>
            )}
          </p>
        </div>

        <div className="flex flex-wrap gap-1 pt-2">
          {post.hashtags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-amber-400 cursor-pointer">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
