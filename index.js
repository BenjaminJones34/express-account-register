require("dotenv").config();

const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const errorRouter = require("./routes/error");

app.use(express.json());

app.use("/user", userRouter);
app.use("*", errorRouter);

app.listen(process.env.HTTP_PORT, () => {
    console.log("Web App Online");
});