// Nuevo formato datos del back para los eventos
const reformat = (events) => {
  const data = [];
  console.log(events);
  events.map((event) =>
    data.push({
      href: "",
      title: event.title,
      //Agregar start end
      avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=`,
      description: event.start,
      content: event.end, //descripcion
      //vermas: "Click aqui para ver mas", // Vista de detalle del evento
    })
  );
  //Titulo
  // Fecha de inicio Hora de inicio
  // Fecha de finalizado Hora de Finalizado
  // Descripción (del evento)
  // Contacto telefono pagina
  // Link (de su pagina)

  return data;
};
export default reformat;
