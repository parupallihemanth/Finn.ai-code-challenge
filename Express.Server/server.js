const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const dbConnection = require("./DBConfig/db");
const userRoutes = require("./Routes/user");
const app = express();

dotenv.config({ path: "./DBConfig/.env" });

dbConnection();

app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);

// Asigning port to express server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
