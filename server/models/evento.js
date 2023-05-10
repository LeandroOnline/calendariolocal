const mongoose = require("mongoose");

const eventoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    start: {
        type: Object,
        required: true
    },
    end:{
        type: Object,
        required: true
    },
    details:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model("Evento", eventoSchema);
