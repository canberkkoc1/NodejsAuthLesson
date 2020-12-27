const mongoose = require("mongoose");

const MONGOURI = "your-mongo-db-url";

const initiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection DB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = initiateMongoServer;
