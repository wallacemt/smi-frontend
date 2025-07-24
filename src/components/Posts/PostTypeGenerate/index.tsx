"use client";
import { useState, useEffect } from "react";

type Props = {
  selectedType: "video" | "image";
  onSelect: (type: "video" | "image") => void;
  loading: boolean;
};

export function PostTypeChoose({ selectedType, onSelect, loading }: Props) {
  const [type, setType] = useState<"video" | "image">(selectedType);

  // Atualiza o estado local quando selectedType mudar
  useEffect(() => {
    setType(selectedType);
  }, [selectedType]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as "video" | "image";
    onSelect(value);
    setType(value);
  };

  return (
    <div className="flex gap-4">
      <p className="text-sm">Tipo de post: </p>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          id="video"
          name="postType"
          value="video"
          checked={type === "video"}
          onChange={handleChange}
          disabled={loading}
          className=" text-accent-500"
        />
        <label htmlFor="video" className="text-sm font-medium">
          {loading ? "Carregando..." : "Video"}
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          id="image"
          name="postType"
          value="image"
          checked={type === "image"}
          onChange={handleChange}
          disabled={loading}
          className=" text-accent-500"
        />
        <label htmlFor="image" className="text-sm font-medium">
          {loading ? "Carregando..." : "Imagem"}
        </label>
      </div>
    </div>
  );
}
