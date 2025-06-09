import { Request, Response } from "express";
import pool from "../config/db";

export const getAllFlights = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query("SELECT * FROM flights");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil data penerbangan" });
  }
};

export const scrapeFlights = async (req: Request, res: Response) => {
  const { airport_code } = req.body;

  try {
    // TODO: panggil fungsi dari services/flightradarService.ts
    res.json({
      message: `Scraping data untuk bandara ${airport_code} sedang berjalan...`,
    });
  } catch (error) {
    res.status(500).json({ message: "Gagal melakukan scraping" });
  }
};

export const exportFlights = async (req: Request, res: Response) => {
  // TODO: buat fitur export CSV berdasarkan query/filter
  res.send("Export data belum diimplementasikan");
};
