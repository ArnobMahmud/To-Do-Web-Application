const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const tasks = require("./routes/task.route");
const dbConnection = require("./database/DataBase");
const rateHandle = require("./middleware/rate.handle");
const errorMsg = require("./middleware/404");
dotenv.config({ path: "./config.env" });

const app = express();
const PORT = process.env.PORT || 5000;
dbConnection();

// Middlewares
app.use(cors());
app.use(bodyParser.json({ extended: "false" }));
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(rateHandle);

// Routes
app.use("/api/v1/tasks", tasks);
app.use(errorMsg);

// Root
app.get("/", (req, res) => {
  console.log("Test[]");
  res.send("Hello from back-end");
});

// Server listen
app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port : http://localhost:${PORT}`);
});
