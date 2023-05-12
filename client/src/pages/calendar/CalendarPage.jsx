import CalendarComponent from "../../components/CalendarComponent/CalendarComponent";
import ListEvents from "../../components/ListEvents/ListEvents";
import Carousel from "../../components/Carousel/Carousel";

const Eventos = () => {
  return (
    <div>
      <Carousel />
      <CalendarComponent />
      <ListEvents />
    </div>
  );
};
export default Eventos;
