import { useEffect, useState } from "react";
import { deletePersonaById, getPersonas, postPersonasGenerate } from "@/api/ai";

import type { Persona } from "@/types/aiTypes";
import { Button } from "@/components/ui/button";
import { History, Trash } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
export function PersonaOverview() {
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getPersonas().then(setPersonas).catch(console.error);
  }, []);

  async function generatePersonas() {
    setLoading(true);
    try {
      const data = await postPersonasGenerate();
      setPersonas(data);
    } catch (error: any) {
      console.error(error);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  }
  async function handleRemovePersona(id: string) {
    setLoading(true);
    try {
      const response = await deletePersonaById(id);
      if (response) {
        setPersonas(personas.filter((persona) => persona.id !== id));
        toast.success("Persona Removida com sucesso!");
      }
    } catch (error) {
      console.error(error);
      toast.error(String(error));
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col space-y-4 items-center justify-center p-6">
        <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-700"></div>
        <p className="text-xl text-gray-400">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="w-full p-4">
      <Accordion type="single" collapsible className="space-y-2">
        {personas.map((p) => (
          <AccordionItem value={p.id} key={p.id} className="border border-gray-700 rounded-lg bg-gray-800">
            <AccordionTrigger className="text-left text-white px-4 py-2 text-lg font-semibold hover:underline">
              {p.title}
            </AccordionTrigger>
            <AccordionContent className="bg-gray-900 rounded-b-lg relative ">
              <div className=" flex justify-end space-x-2 p-2">
                <Button
                  variant="destructive"
                  className="hover:bg-red-800 hover:text-white"
                  onClick={() => handleRemovePersona(p.id)}
                  disabled={loading}
                >
                  <Trash size={16} className="mr-2" />
                  Remover
                </Button>
                <Link to={`/post/history/persona/${p.id}`}>
                  <Button variant="default" className="hover:bg-amber-800 hover:text-white">
                    <History size={16} className="mr-2" />
                    Posts Gerados
                  </Button>
                </Link>
              </div>
              <div className="overflow-hidden max-w-full px-4 py-4">
                <div className="w-full max-w-[1000px] px-4">
                  <Table className="w-full">
                    <TableBody>
                      {[
                        ["Nome", p.nome],
                        ["Idade", p.idade],
                        ["Profissão", p.profissao],
                        ["Interesses", p.interesses],
                        ["Objetivos", p.objetivos],
                        ["Desafios", p.desafios],
                        ["Como ajudar", p.como_ajuda],
                        ["Comportamento Digital", p.comportamento_digital],
                        ["Poder Aquisitivo", p.poder_aquisitivo],
                        ["Localização", p.localizacao],
                        ["Nível Educacional", p.nivel_educacional],
                        ["Estado Civil", p.estado_civil],
                        ["Número de Filhos", p.numero_de_filhos],
                        ["Frequência de Viagem", p.frequencia_de_viagem],
                        ["Preferências de Marca", p.preferencias_de_marca],
                      ].map(([label, value]) => (
                        <TableRow key={label} className="hover:bg-gray-950">
                          <TableCell className="font-medium text-amber-700 whitespace-nowrap">{label}</TableCell>
                          <TableCell className="text-gray-200 break-words whitespace-normal ">{value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {personas.length < 3 && (
        <div className="flex flex-col space-y-4 items-center justify-center p-6">
          <p className="text-xl text-gray-400">Gere novas personas com base nos dados.</p>
          <Button onClick={generatePersonas} className="text-white cursor-pointer hover:bg-[var(--vermilion-400)]">
            Gerar Personas
          </Button>
        </div>
      )}
    </div>
  );
}
