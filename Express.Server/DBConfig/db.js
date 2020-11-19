const mongoose = require("mongoose");

const dbConnection = async () => {
  const connection = await mongoose.connect("mongodb://mongo:27017", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected: ${connection.connection.host}`);
};

module.exports = dbConnection;
