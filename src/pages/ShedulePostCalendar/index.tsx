import { getScheduledPosts } from "@/api/schedule";
import { CalendarFull } from "@/components/Sheduled/FullCalendar";
import { SiteHeader } from "@/components/ui/site-header";
import type { PostSheduled } from "@/types/aiTypes";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

export default function ShedulePostCalendar() {
  const [posts, setPosts] = useState<PostSheduled[]>();
  const [loading, setLoading] = useState(true);
  async function fetchScheduledPosts() {
    try {
      const response = await getScheduledPosts();
      console.log(response);
      setPosts(response);
    } catch (error) {
      console.error("Error fetching scheduled posts:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchScheduledPosts();
  }, []);
  return (
    <section className="mx-auto min-h-screen min-w-full px-2 flex flex-col gap-6 overflow-hidden">
      <div className="mb-6">
        <SiteHeader title="Agenda de Postagens" icon={<Calendar color="#f2f2f2" className="mr-3" />} />
      </div>
      {loading ? (
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-gray-50">Carregando...</p>
          <span className="mx-auto animate-spin border-t-4 p-2 border border-destructive h-12 w-12 rounded-full"></span>
        </div>
      ) : !posts || posts.length === 0 ? (
        <div className="mx-auto w-full bg-gray-500 rounded-2xl p-4">
          <p className="text-center text-white">Nenhuma postagem agendada</p>
        </div>
      ) : (
        <div className="mx-auto w-full bg-gray-500 rounded-2xl p-4 md:overflow-auto">
          <CalendarFull posts={posts} />
        </div>
      )}
    </section>
  );
}
