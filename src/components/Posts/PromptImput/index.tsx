"use client";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

type Props = {
  prompt: string;
  onChange: (v: string) => void;
  loading: boolean;
};

export function PromptInput({ prompt, onChange, loading }: Props) {
  const MAX = 200;
  const remaining = MAX - prompt.length;

  return (
    <div className="space-y-2">
      <Textarea
        placeholder="Prompt (opcional) — até 200 caracteres"
        className="h-32 border-none"
        value={prompt}
        onChange={(e) => onChange(e.target.value.slice(0, MAX))}
        rows={4}
        disabled={loading}
      />
      <div className="flex justify-between items-center text-xs text-zinc-500">
        <span>{remaining} caracteres restantes</span>
        <Progress value={(prompt.length / MAX) * 100} className="w-32 h-1" />
      </div>
    </div>
  );
}
