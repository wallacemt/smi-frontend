import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { PostsByPersonas } from "@/types/aiTypes";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { Link } from "react-router";

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
    <Card className="bg-transparent rounded-md  overflow-hidden border-gray-600 p-2 mb-2 shadow-sm transition hover:shadow-md text-white">
      <div className="flex items-center gap-3 p-4 relative">
        <Avatar>
          <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${post.personaId}`} />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-sm ">
            Persona #{post.personaId.slice(0, 4)} - {post.title}
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {new Date(post.createdAt).toLocaleDateString("pt-BR")}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="absolute top-2 -right-1 p-1 rounded-full hover:bg-gray-700">
            <EllipsisVertical className="h-6 w-6 text-gray-400" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuLabel>Opções de Post</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Editar Post
                <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Remover Post
                <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
              </DropdownMenuItem>
              <Link to={`/post/${post.id}/scheduled`}>
                <DropdownMenuItem>
                  Agendar Post
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Ver Insights
              <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>Promote</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Reportar
              <DropdownMenuShortcut>⇧⌘R</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
