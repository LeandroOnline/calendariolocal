// Funcion nuevo formato datos del back para los eventos
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
      content: event.details, //descripcion
      //vermas: "Click aqui para ver mas", // Vista de detalle del evento
    })
  );

  return data;
};
export default reformat;
