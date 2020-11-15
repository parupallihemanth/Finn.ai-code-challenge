const mongoose = require("mongoose");

const dbConnection = async () => {
  const connection = await mongoose.connect(process.env.MongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected: ${connection.connection.host}`);
};

module.exports = dbConnection;
