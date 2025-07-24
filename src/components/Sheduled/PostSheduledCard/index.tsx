import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreVertical, CalendarClock } from "lucide-react";
import type { PostsByPersonas } from "@/types/aiTypes";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface PostSheduledCardProps {
  post: PostsByPersonas;
  date: string;
  time: string;
}
export const PostSheduledCard = ({ post, date, time }: PostSheduledCardProps) => {
  return (
    <Card className="bg-transparent  border-b-5 border-neutral-400 w-full md:max-w-4xl mx-auto overflow-hidden relative">
      <CardContent className="flex flex-col md:flex-row gap-4 p-4 pt-0">
        <div className="w-full md:w-1/3 overflow-hidden rounded-lg border border-neutral-800 shadow-md hover:scale-[1.01] transition-transform">
          <div
            className="w-full h-48 md:h-60 bg-cover bg-center"
            style={{ backgroundImage: `url(${post.imagem})` }}
          ></div>
        </div>
        <div className="flex-1 flex flex-col justify-start text-white space-y-2">
          <div className="flex flex-row items-start justify-between p-4">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-white">{post.title}</h2>
            </div>
            <DropdownMenu>
             
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-gray-400 text-white">
                    <MoreVertical size={18} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-popover max-w-50 rounded-2xl text-white p-2 space-y-1 shadow-md">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Cancelar postagem
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Remarcar
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Editar conteúdo
                  </Button>
                </DropdownMenuContent>
             
            </DropdownMenu>
          </div>
          <div className="px-4">
            <h3 className="text-sm  text-gray-200 font-medium mb-1 flex items-center gap-2">
              <CalendarClock size={16} />
              Postagem agendada para:
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{date.split("T")[0].split("-").reverse().join("/")}</Badge>
              <Badge variant="secondary">{time}</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
