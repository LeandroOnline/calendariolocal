const Evento = require("../models/evento");

const addevent = async (req, res) => {
  try {
    const add = new Evento({
      title: req.body.title,
      start: req.body.start,
      end: req.body.end,
      details: req.body.details,
    });
    await add.save();
    res.send("Evento Agregado");
  } catch (err) {
    res.send(err);
  }
};

module.exports = addevent;
