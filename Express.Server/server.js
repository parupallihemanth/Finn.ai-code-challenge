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

// deployment setup
const __dirrname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirrname, "frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirrname, "./frontend/build/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

// Asigning port to express server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
