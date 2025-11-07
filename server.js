const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const errorRoute = require("./routes/ErrorRoute");
const tenantRoute = require("./routes/TenantRoute");
const userRoute = require("./routes/UserRoute");

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/api", (req, res) => res.send("API is running ✅"));
app.use("/api/error", errorRoute);
app.use("/api/tenant", tenantRoute);
app.use("/api/user", userRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
