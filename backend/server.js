const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const goalRouter = require("./routes/goalRoutes");
const colors = require("colors");
const connectDB = require("./config/db");

connectDB();
const app = express();

//middleware to get the body from the POST request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//middleware for routes
app.use("/api/goals", goalRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`server started ${port}`));
