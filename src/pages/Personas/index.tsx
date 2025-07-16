import { Separator } from "@/components/ui/separator";
import { SiteHeader } from "@/components/ui/site-header";
import { FaPeopleGroup } from "react-icons/fa6";
import { PersonaOverview } from "@/components/Personas/PersonaOverview";

export default function Persona() {

  return (
    <div className="transition-opacity max-w-6xl mx-auto flex flex-col gap-4 duration-300 ease-in-out px-4 font-principal overflow-x-hidden">
      <SiteHeader title="Gerenciamento de Personas" icon={<FaPeopleGroup />} />
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-3xl text-white font-principal">Personas</h2>
        <Separator />
        <PersonaOverview />
      </div>
    </div>
  );
}
