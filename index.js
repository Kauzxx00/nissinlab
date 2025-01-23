const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const path = require("path");
const routes = require("./routes/routes");

require("dotenv").config();

const app = express();
const PORT = 3000;

require("./config/passport")(passport);

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na URL: http://localhost:${PORT}`);
});