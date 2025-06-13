import { Request, Response } from "express";
import pool from "../config/db";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const [users]: any = await pool.query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    if (users.length === 0) {
      return res.status(401).json({ message: "User tidak ditemukan" });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ message: "Password salah" });
    }

    // TODO: Tambahkan JWT token (opsional)
    res.json({
      message: "Login berhasil",
      user: { id: user.id, username: user.username },
    });
  } catch (error) {
    res.status(500).json({ message: "Gagal login" });
  }
};
