const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./Config/db");
const userRoutes = require("./Routes/user");
const app = express();

dotenv.config({ path: "./config/.env" });

dbConnection();
app.use(express.json());
app.use(cors());
app.use("/api", userRoutes);

// Asigning port to express server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));