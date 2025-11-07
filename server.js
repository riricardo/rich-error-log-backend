const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("API is running ✅");
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Ricardo" },
    { id: 2, name: "Maria" },
  ]);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: "User created", user: newUser });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
