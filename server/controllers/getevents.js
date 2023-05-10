const Evento = require("../models/evento");

const getevents = async (req, res) => {
  try {
    const get = await Evento.find();
    res.json(get);
  } catch (err) {
    res.send(err);
  }
};

module.exports = getevents;
