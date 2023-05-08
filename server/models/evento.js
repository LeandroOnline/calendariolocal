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
    },
    details:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model("Evento", eventoSchema);
