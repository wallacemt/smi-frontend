import { useEffect, useState } from "react";
import { getGeneratedPosts, getGeneratedPostsByPersonaId, getPersonaById } from "@/api/ai";
import { type Persona, type PostsByPersonas } from "@/types/aiTypes";
import { PostCard } from "@/components/Posts/PostCard";
import { PostCardSkeleton } from "@/components/Posts/PostCard/skeleton";
import { SiteHeader } from "@/components/ui/site-header";
import { useParams } from "react-router";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const paramSchema = z.object({
  id: z.string().uuid("ID inválido: deve ser um UUID válido."),
});

export default function PostHistory() {
  const { id } = useParams<{ id?: string }>();
  const [posts, setPosts] = useState<PostsByPersonas[] | null>(null);
  const [persona, setPersona] = useState<Persona | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const validateAndFetch = async () => {
      try {
        if (id) {
          paramSchema.parse({ id });
          const postsById = await getGeneratedPostsByPersonaId(id);
          const personaById = await getPersonaById(postsById[0].personaId);
          setPersona(personaById);
          setPosts(postsById);
        } else {
          const allPosts = await getGeneratedPosts();
          setPosts(allPosts);
        }
      } catch (err: any) {
        if (err instanceof z.ZodError) {
          setError(err.issues[0].message);
        } else {
          setError("Erro ao buscar posts. Tente novamente mais tarde.");
        }
      } finally {
        setLoading(false);
      }
    };

    validateAndFetch();
  }, [id]);

  return (
    <section className="section max-w-6xl mx-auto px-2">
      <div className="mb-6">
        <SiteHeader title="Posts Gerados" />
        <p className="text-gray-400 ml-12">Posts gerados pela AI</p>
      </div>
      {error ? (
        <div className="p-6 text-center text-red-500 font-medium">{error}</div>
      ) : (
        <div className="grid grid-cols-1 max-w-xl mx-auto gap-6 mb-6">
          {persona && (
            <Card className="bg-gray-800 border-1 border-gray-700">
              <CardHeader className="text-lg font-semibold text-white">
                <CardTitle>Persona - {persona.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2  text-gray-200 text-sm">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <p className="font-semibold text-amber-700">Nome:</p>
                    <p>{persona.nome}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="font-semibold text-amber-700">ID:</p>
                    <p>{persona.id.slice(0, 4)}...</p>
                  </div>
                  <div className="flex gap-2 flex-col">
                    <p className="font-semibold text-amber-700">Objetivos:</p>
                    <p>{persona.objetivos}</p>
                  </div>
                  <div className="flex gap-2 flex-col">
                    <p className="font-semibold text-amber-700">Comprtamento Digital:</p>
                    <p>{persona.comportamento_digital}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => <PostCardSkeleton key={i} />)
          ) : posts && posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id}>
                <PostCard post={post} />
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-zinc-500">Nenhum post encontrado {id ? "para essa persona." : ""}</div>
          )}
        </div>
      )}
    </section>
  );
}
