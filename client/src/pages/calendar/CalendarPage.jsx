import CalendarComponent from "../../components/CalendarComponent/CalendarComponent";
import ListEvents from "../../components/ListEvents/ListEvents";
import Carousel from "../../components/CarouselAll/Carousel";
import images1 from "../../assets/imgCarousel/images1.jpeg";
import images2 from "../../assets/imgCarousel/images2.jpeg";
import images3 from "../../assets/imgCarousel/images3.jpeg";
import images4 from "../../assets/imgCarousel/images4.jpeg";
import images5 from "../../assets/imgCarousel/images5.jpg";

const Eventos = () => {
  return (
    <div>
      <Carousel img={[images1, images2, images3, images4, images5]} />
      <CalendarComponent />
      <ListEvents />
    </div>
  );
};
export default Eventos;
