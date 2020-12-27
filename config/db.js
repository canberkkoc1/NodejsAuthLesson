const mongoose = require("mongoose");

const MONGOURI =
  "mongodb+srv://username:passs@nodecon.in62z.mongodb.net/databasename?retryWrites=true&w=majority";

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
