import { useState } from "react";

const Calendar = () => {
  const [fechaActual, setFechaActual] = useState(new Date());
  const añoActual = fechaActual.getFullYear();
  const mesActual = fechaActual.getMonth();

  const diasEnMes = new Date(añoActual, mesActual + 1, 0).getDate(); // Obtiene el número de días en el mes actual
  const dias = [];
  for (let dia = 1; dia <= diasEnMes; dia++) {
    dias.push({
      dia,
      mes: mesActual,
      año: añoActual,
    });
  }

  const diasSemana = ["D", "L", "M", "M", "J", "V", "S"];

  return (
    <div>
      <table>
        <thead>
          <tr>
            {diasSemana.map((dia, index) => (
              <th key={`dia-${index}`}>{dia}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(Math.ceil(diasEnMes / 7)).keys()].map((semana) => (
            <tr key={semana}>
              {[...Array(7).keys()].map((diaSemana) => {
                const diaIndex = semana * 7 + diaSemana;
                const dia = dias[diaIndex];
                return <td key={diaIndex}>{dia && dia.dia}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
