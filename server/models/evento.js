const mongoose = require("mongoose");

const eventoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end:{
        type: Date,
        required: true
    }
});

module.exports = mongoose.model("Evento", eventoSchema);
