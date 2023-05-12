import { Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselAll = (props) => {

  return (
    <Carousel autoplay>
      {props.img.map((element, key) => (
        <div key={key}>
          <img src={element} style={contentStyle} />
        </div>
      ))}
    </Carousel>
  );
};
export default CarouselAll;
