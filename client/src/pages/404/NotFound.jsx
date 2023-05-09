import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const Navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Lo sentimos, la URL que intentas visitar no fue encontrada"
      extra={
        <Button type="primary" onClick={() => Navigate("/")}>
          Volver al Inicio
        </Button>
      }
    />
  );
};
export default NotFound;
