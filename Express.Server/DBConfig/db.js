const mongoose = require("mongoose");

const dbConnection = async () => {
  const connection = await mongoose.connect(
    "mongodb+srv://babu:babu123@cluster0.9qrdw.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );
  console.log(`MongoDB Connected: ${connection.connection.host}`);
};

module.exports = dbConnection;
