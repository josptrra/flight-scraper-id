import express from "express";
import { login } from "../controllers/authController";

const router = express.Router();

router.post("/login", login as express.RequestHandler);

export default router;
