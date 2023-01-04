const path = require("path");
const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const goalRouter = require("./routes/goalRoutes");
const colors = require("colors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

connectDB();
const app = express();

//middleware to get the body from the POST request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//middleware for routes
app.use("/api/goals", goalRouter);
app.use("/api/users", userRoutes);

//serve frontend

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    return res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    );
  });
} else {
  app.use("/", (req, res) => res.send("Please set it to production"));
}

app.use(errorHandler);

app.listen(port, () => console.log(`server started ${port}`));
