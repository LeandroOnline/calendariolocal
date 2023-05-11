import { useEffect } from "react";
import useGlobalStore from "../../store/Store";

// lista de eventos
const ListEvents = () => {
  console.log("ListEvent");

  const { events, GetEvents } = useGlobalStore();

  useEffect(() => {
      GetEvents();
  }, []);

  return (
    <div>
      {events?.map((event,key) => (
        <p key={key}>→ {event.title}</p>
      ))}
    </div>
  );
};
export default ListEvents;
