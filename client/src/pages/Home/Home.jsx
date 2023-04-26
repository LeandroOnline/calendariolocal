import Calendar from "../../components/Calendar/Calendar";
import AddEvent from "../../components/AddEvent/AddEvent";

// Home con todos sus componentes

const Home = () => {
  return (
    <div>
      <div>Estoy en el Home perro </div>
      <div>
        <AddEvent />
        <Calendar />
        
      </div>
    </div>
  );
};
export default Home;
