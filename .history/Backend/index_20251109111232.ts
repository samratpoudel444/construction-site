const express = require("express");
const app = express();

app.use(express.json());

// Routes
app.get("/api/1", (req: any, res: any) => {
  res.status(200).json({ sam: "heklds" });
});

module.exports = app;
