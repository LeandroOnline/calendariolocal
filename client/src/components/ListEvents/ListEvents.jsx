import { useEffect } from "react";
import useGlobalStore from "../../store/Store";

// lista de eventos
const ListEvents = () => {
  console.log("ListEvent");

  const { events, GetEvents } = useGlobalStore();

  useEffect(() => {
    GetEvents();
  }, []);

  console.log(events);
  // [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // {end,start,title,_id}
  // {href,title,avatar,description,content}

  return (
    <div>
      {events?.map((event, key) => (
        <div key={key}>
          <p>→ {event.title}</p>
          <p> {event.details} </p>
        </div>
      ))}
    </div>
  );
};
export default ListEvents;
