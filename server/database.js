const mongoose = require("mongoose");

const db = (async () => {
  try {
    await mongoose.connect(process.env.DATA_BASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DATA_BASE ON')
  } catch (err) {
    console.log("Error db connection: " + err);
  }
})()
