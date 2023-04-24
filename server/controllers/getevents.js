const Evento = require('../models/evento');

const getevents = async (req,res)=>{
    const get = await Evento.find();
    res.json(get);
}

module.exports = getevents;