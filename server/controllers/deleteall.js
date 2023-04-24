const Evento = require('../models/evento');

const deleteall = async(req, res)=>{
    await Evento.deleteMany({});
    res.send("OK")
}

module.exports = deleteall;