"use client";
import { useState } from "react";
import type { PostsByPersonas } from "@/types/aiTypes";
import { Button } from "@/components/ui/button";
import { PersonaSelect } from "@/components/Posts/PersonaSelect";
import { PromptInput } from "@/components/Posts/PromptImput";
import { PostCard } from "@/components/Posts/PostCard";
import { SiteHeader } from "@/components/ui/site-header";
import { PostCardSkeleton } from "@/components/Posts/PostCard/skeleton";
import { Separator } from "@/components/ui/separator";
import { postGeneratePostByPersona } from "@/api/ai";
import { Wand } from "lucide-react";
import { toast } from "sonner";

export default function PostGenerate() {
  const [personaId, setPersonaId] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<PostsByPersonas | null>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!personaId) return;

    setLoading(true);
    try {
      const generated = await postGeneratePostByPersona(personaId, prompt);
      setPost(generated);
    } catch (err) {
      console.error(err);
      toast.error(String(err))
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section max-w-6xl mx-auto px-2">
      <div className="mb-6">
        <SiteHeader title="Gerar novo Post" />
        <p className="text-gray-400 ml-12">Geração de posts com base nas personas</p>
      </div>
      <div className="w-full max-w-2xl mx-auto p-4  text-white rounded-md shadow">
        <form className="space-y-4  p-2 border rounded-2xl border-zinc-600" onSubmit={handleSubmit}>
          <PersonaSelect selectedId={personaId} onSelect={setPersonaId} loading={loading} />
          <PromptInput prompt={prompt} onChange={setPrompt} loading={loading} />
          <Button
            type="submit"
            className="w-full bg-[var(--khaki-1800)] hover:bg-[var(--khaki-1700)] cursor-pointer disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? (
              "Gerando..."
            ) : (
              <p className="flex gap-2 items-center justify-center">
                Gerar Post
                <Wand size={20} />
              </p>
            )}
          </Button>
        </form>

        {loading && (
          <div className="grid grid-cols-1 max-w-xl mx-auto gap-6 mt-6">
            {Array.from({ length: 1 }).map((_, i) => (
              <PostCardSkeleton key={i} />
            ))}
          </div>
        )}
        {post && (
          <div className="grid grid-cols-1 max-w-xl mx-auto gap-6 mb-6">
            <div className="flex flex-col">
              <h2 className="mt-6 text-center mb-2 text-2xl font-principal text-popover-foreground font-semibold">
                Post Gerado
              </h2>
              <Separator className="-mb-6" />
              <PostCard post={post} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
