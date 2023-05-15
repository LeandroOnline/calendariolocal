import Carousel from "../../components/CarouselAll/Carousel";
import images5 from "../../assets/imgCarousel/images5.jpg";

// Pagina de entrada y HOME

const Home = () => {
  return (
    <div>
      <Carousel img={[images5]} />
      <h1>Calendario Parana</h1>
      <h1>Esta es la pagina de entrada click aqui para ingresar</h1>
      <h2>
        Enterate de todos los eventos de la ciudad y publica tus eventos GRATIS
        :D
      </h2>
    </div>
  );
};
export default Home;
