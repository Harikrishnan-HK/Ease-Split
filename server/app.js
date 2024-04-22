var dotenv = require("dotenv");
var express = require("express");
var logger = require('./helper/logger')
var requestLogger = require('./helper/requestLogger')

var apiAuth = require("./helper/apiAuthentication");
var cors = require("cors");

const path = require("path");
dotenv.config();

var usersRouter = require("./routes/userRouter");
var groupRouter = require("./routes/groupRouter");
var expenseRouter = require("./routes/expenseRouter");

var app = express();
app.use(cors());
app.use(express.json());
app.use(requestLogger)

app.use("/api/users", usersRouter);
app.use("/api/group", apiAuth.validateToken, groupRouter);
app.use("/api/expense", apiAuth.validateToken, expenseRouter);

const port = process.env.PORT || 8000;
app.listen(port, (err) => {
  if (err) {
    console.error(`Failed to start server: ${err}`);
    logger.error(`Failed to start server: ${err}`);
  } else {
    console.log(`Server started in PORT | ${port}`);
    logger.info(`Server started in PORT | ${port}`);
  }
});
