const express = require("express");
const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Import routes
const mssvRoutes = require("./routes/mssvRoutes");
const indexRoutes = require("./routes/indexRoutes");
const messageRoutes = require("./routes/messageRoutes");

// Use routes
app.use("/", indexRoutes);
app.use("/:MSSV", mssvRoutes);
app.use("/message", messageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
