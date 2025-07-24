import { SiteHeader } from "@/components/ui/site-header";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { DateSelector } from "@/components/Sheduled/DateSelector";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { PostCard } from "@/components/Posts/PostCard";
import type { PostsByPersonas } from "@/types/aiTypes";
import { getPostById } from "@/api/ai";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { PostCardSkeleton } from "@/components/Posts/PostCard/skeleton";
import type { SchedulePostRequest } from "@/types/schedule";
import { createSchedulePost } from "@/api/schedule";

export default function ShedulePostCreate() {
  const { id } = useParams();
  if (!id) {
    toast.error("ID do post não fornecido.");
    return Navigate({ to: "/post/history" });
  }
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [post, setPost] = useState<PostsByPersonas | null>(null);
  const [time, setTime] = useState<Date>();
  const [loading, setLoading] = useState(false);
  async function handlePost() {
    try {
      const res = await getPostById(id || "");
      setPost(res);
    } catch (error) {
      toast.error(String(error));
    }
  }
  useEffect(() => {
    if (id) {
      handlePost();
    }
  }, [id]);

  async function handleShedule() {
    setLoading(true);
    try {
      const data: SchedulePostRequest = {
        date: date?.toISOString().split("T")[0]!,
        time: time?.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) || "00:00",
        postId: id || "",
      };
      const res = await createSchedulePost(data);
      if (res) {
        toast.success("Post agendado com sucesso!");
        setTimeout(() => {
          navigate("/post/scheduled");
        }, 1500);
      }
    } catch (error) {
      toast.error("Erro ao agendar post: " + String(error));
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="section max-w-6xl mx-auto px-2">
      <div className="mb-6">
        <SiteHeader title="Agendar Post" icon={<RiCalendarScheduleFill color="#f2f2f2" className="mr-3" />} />
      </div>
      <div className="grid grid-cols-1 max-w-xl mx-auto gap-6 mb-6">
        <Card className="border bg-transparent border-gray-600 gap-4 p-4 rounded-md shadow-md">
          <CardHeader className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-200">Selecione a Data e Hora</h2>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400 mb-2">Escolha a data e hora para agendar o post.</p>
            <DateSelector date={date} setDate={setDate} setTime={setTime} />
          </CardContent>
          <CardAction className="self-end">
            <Button
              className=" mt-4  bg-blue-600 hover:bg-blue-700"
              onClick={handleShedule}
              type="submit"
              disabled={!date || !time}
            >
              {loading ? (
                <span className="animate-spin border-2 h-4 w-4 rounded-full border-amber-300 border-t-transparent"></span>
              ) : (
                <>
                  {" "}
                  Agendar <ChevronRight />
                </>
              )}
            </Button>
          </CardAction>
        </Card>
        {post ? <PostCard post={post} /> : Array.from({ length: 1 }).map((_, i) => <PostCardSkeleton key={i} />)}
      </div>
    </section>
  );
}
