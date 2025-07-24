import { getScheduledPosts } from "@/api/schedule";
import { PostSheduledCard } from "@/components/Sheduled/PostSheduledCard";
import { PostSheduledCardSkeleton } from "@/components/Sheduled/PostSheduledCard/skeleton";
import { SiteHeader } from "@/components/ui/site-header";
import type { PostSheduled } from "@/types/aiTypes";
import { CalendarArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function ShedulePost() {
  const [posts, setPosts] = useState<PostSheduled[]>();
  const [loading, setLoading] = useState(true);
  async function fetchScheduledPosts() {
    try {
      const response = await getScheduledPosts();
      console.log(response)
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
    <section className="section max-w-6xl mx-auto px-2">
      <div className="mb-6">
        <SiteHeader title="Posts Agendados" icon={<CalendarArrowUp color="#f2f2f2" className="mr-3" />} />
      </div>
      <div className="flex flex-col max-w-2xl mx-auto gap-6 mb-6">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => <PostSheduledCardSkeleton key={i} />)
        ) : posts && posts.length > 0 ? (
          posts?.map((p) => <PostSheduledCard key={p.post.id} date={p.date} time={p.time} post={p.post} />)
        ) : (
          <div className="text-gray-500 text-center flex flex-col items-center justify-center gap-2">
            <p>Nenhum post agendado.</p>
            <div className="space-y-2">
              <p>Você pode agendar posts clicando no botão abaixo.</p>
              <Link to={"/post/history"} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Agendar Novo Post
              </Link>
            </div>
          </div>
        )}
        {}
      </div>
    </section>
  );
}
