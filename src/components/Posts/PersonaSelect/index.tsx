"use client";
import { useEffect, useState } from "react";
import { getPersonas } from "@/api/ai";
import type { Persona } from "@/types/aiTypes";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Props = {
  selectedId: string;
  onSelect: (id: string) => void;
  loading: boolean;
};

export function PersonaSelect({ selectedId, onSelect, loading }: Props) {
  const [personas, setPersonas] = useState<Persona[]>([]);

  useEffect(() => {
    getPersonas().then(setPersonas).catch(console.error);
  }, []);

  return (
    <Select value={selectedId} onValueChange={onSelect}>
      <SelectTrigger className="w-full border-none" disabled={loading}>
        <SelectValue placeholder="Selecione uma persona" />
      </SelectTrigger>
      <SelectContent>
        {personas.map((p) => (
          <SelectItem key={p.id} value={p.id}>
            {p.nome} - {p.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
