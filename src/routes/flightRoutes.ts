import express from "express";
import {
  getAllFlights,
  scrapeFlights,
  exportFlights,
} from "../controllers/flightController";

const router = express.Router();

router.get("/", getAllFlights);

router.post("/scrape", scrapeFlights);

router.get("/export", exportFlights);

export default router;
