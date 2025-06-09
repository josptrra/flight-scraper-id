import express from "express";
import {
  getAllFlights,
  scrapeFlights,
  exportFlights,
} from "../controllers/flightController";

const router = express.Router();

// Ambil semua data penerbangan
router.get("/", getAllFlights);

// Jalankan scraping untuk bandara tertentu
router.post("/scrape", scrapeFlights);

// Export data ke CSV/Excel (nanti bisa diatur via query params)
router.get("/export", exportFlights);

export default router;
