const express = require("express");
const bodyParser = require("body-parser");
const loginRoute = require("./api/login.cjs");
const registerRoute = require("./api/register.cjs");
const garmentRoute = require("./api/garments.cjs");
const cors = require("cors");

const app = express();
const port = 3000;

// C: were there cors issues?
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(bodyParser.json());

app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/garments", garmentRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
