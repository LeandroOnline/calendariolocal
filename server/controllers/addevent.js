const Evento = require("../models/evento");

const addevent = async (req, res) => {
  try {
    const add = new Evento({
      title: req.body.title,
      allDay: req.body.allDay,
      start: req.body.start,
      end: req.body.end,
    });
    await add.save();
    res.send("Evento Agregado");
  } catch (err) {
    res.send(err);
  }
};

module.exports = addevent;
