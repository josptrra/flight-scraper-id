import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import flightRoutes from "./routes/flightRoutes";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/flights", flightRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
