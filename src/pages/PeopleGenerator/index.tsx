import { useState } from "react";
import { Loader2, UserPlus, Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface Persona {
  nome: string;
  faixaEtaria: string;
  image: string;
  motivacoes: string;
}

export default function PersonaGenerator() {
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null);
  const [post, setPost] = useState("");
  const [postResult, setPostResult] = useState("");

  const mockPersonas: Persona[] = [
    {
      nome: "Sofia, a Nômade Digital",
      faixaEtaria: "28-35 anos",
      image: "https://diegoemir.com/wp-content/uploads/2025/01/nomadesdigitais.jpg",
      motivacoes: "Busca natureza, fotos incríveis e conexão autêntica com o destino.",
    },
    {
      nome: "Família Silva",
      faixaEtaria: "Pais 40-55 anos, filhos 8-16",
      image:
        "https://plus.unsplash.com/premium_photo-1661679465291-9d9e127b6668?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm90byUyMGRlJTIwZmFtJUMzJUFEbGlhfGVufDB8fDB8fHww",
      motivacoes: "Procuram férias seguras, tranquilas e com diversão para todos.",
    },
    {
      nome: "Klaus, o Explorador Europeu",
      faixaEtaria: "50-65 anos",
      motivacoes: "Quer experiências exclusivas, contato com a cultura e natureza preservada.",
      image:
        "https://images.unsplash.com/photo-1559481581-d800dfdb9316?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGV4cGxvcmFkb3J8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const generatePersonas = () => {
    setLoading(true);
    setTimeout(() => {
      setPersonas(mockPersonas);
      setLoading(false);
    }, 1000);
  };

  const generatePost = () => {
    if (!selectedPersona || !post) return;
    setLoading(true);
    setTimeout(() => {
      setPostResult(`📢 Post para ${selectedPersona.nome}:\n\n${post} 🚀\n\n🌿 Agende já sua aventura!`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 text-white">
      <h1 className="text-2xl font-semibold">Geração de Personas & Postagens</h1>

      <button
        onClick={generatePersonas}
        className="flex items-center gap-2 mx-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
        disabled={loading}
      >
        {loading ? <Loader2 className="animate-spin" size={18} /> : <UserPlus size={18} />}
        Gerar Personas
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {personas.map((persona, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedPersona(persona)}
            className={`border  rounded p-4 cursor-pointer hover:shadow ${
              selectedPersona === persona ? "border-blue-900/90" : "border-blue-500"
            }`}
          >
            <img src={persona.image} alt={persona.nome} className="h-40 w-full" />
            <Separator />
            <h2 className="font-medium text-lg">{persona.nome}</h2>
            <p className="text-sm text-gray-500">{persona.faixaEtaria}</p>
            <p className="mt-2 text-sm text-gray-700">{persona.motivacoes}</p>
          </div>
        ))}
      </div>

      {selectedPersona && (
        <div className="border rounded p-4 space-y-4">
          <h2 className="text-lg font-medium">Criar Post para {selectedPersona.nome}</h2>
          <textarea
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="Ex: Viva a aventura na Lagoa Azul com caiaque e trilha!"
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
          <button
            onClick={generatePost}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition disabled:opacity-50"
            disabled={loading || !post}
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
            Gerar Postagem
          </button>

          {postResult && (
            <div className="bg-gray-100 border rounded p-3 mt-4 whitespace-pre-line text-sm text-gray-800">
              {postResult}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
