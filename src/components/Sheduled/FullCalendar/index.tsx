import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import type { PostSheduled } from "@/types/aiTypes";

interface CalendarFullProps {
  posts: PostSheduled[];
}
export const CalendarFull = ({ posts }: CalendarFullProps) => {
  const events = posts?.map((post) => ({
    title: post.post.title,
    date: post.date,
    time: post.time,
  }));

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={(info) => alert(`Post Agendado para: ${info.event.title}`)}
        editable={true}
        droppable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        eventClassNames={["text-white", "text-sm", "font-semibold", "bg-accent-500", "rounded-lg", "shadow-md"]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek",
        }}
        buttonText={{
          prev: "<",
          next: ">",
          today: "Hoje",
          dayGridMonth: "Mês",
          dayGridWeek: "Semana",
        }}
        dayCellClassNames={(date) => {
          const dayOfWeek = date.date.getDay();
          return dayOfWeek === 0
            ? "bg-red-500 text-white hover:bg-red-600"
            : dayOfWeek === 6
            ? "bg-blue-500 text-white "
            : "bg-green-600 text-gray-900";
        }}
        selectOverlap={false}
        eventContent={(eventInfo) => (
          <div className="p-2 bg-blue-900 rounded-lg text-white text-center shadow-sm truncate">
            <span>{eventInfo.event.title}</span>
          </div>
        )}
        contentHeight={600}
        locale="pt-br"
      />
    </>
  );
};
