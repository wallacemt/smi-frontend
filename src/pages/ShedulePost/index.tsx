import { CalendarFull } from "@/components/FullCalendar";
import { SiteHeader } from "@/components/ui/site-header";
import { Calendar } from "lucide-react";

export default function ShedulePost() {
  return (
    <section className="mx-auto min-h-screen min-w-full px-2 flex flex-col gap-6 overflow-hidden">
      <div className="mb-6">
        <SiteHeader title="Agenda de Postagens" icon={<Calendar color="#f2f2f2" className="mr-3" />} />
      </div>
      <div className="mx-auto w-full bg-gray-500 rounded-2xl p-4 md:overflow-auto">
        <CalendarFull />
      </div>
    </section>
  );
}
