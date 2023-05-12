import { Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselHome = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>Agenda tu evento</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Totalmente gratis</h3>
    </div>
    <div>
      <h3 style={contentStyle}>No te quedes afuera</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Enterate de todo</h3>
    </div>
  </Carousel>
);
export default CarouselHome;
