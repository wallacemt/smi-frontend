import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export const CalendarFull = () => {
  const events = [
    { title: "Post Instagram Para o instagram da baixio", date: "2025-07-12" },
    { title: "POST IG", date: "2025-07-12" },
    { title: "Post YT", date: "2025-07-12" },
    { title: "Post Facebook", date: "2025-07-14" },
    { title: "Post Twitter", date: "2025-07-15" },
  ];

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      eventClick={(info) => alert(`Post: ${info.event.title}`)}
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
      windowResize={() => {
        console.log("Window resized, calendar should adjust accordingly.");
      }}
      locale="pt-br"
    />
  );
};
