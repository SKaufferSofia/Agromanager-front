import dotenv from "dotenv";
dotenv.config();

export const API_URL = process.env.API_URL || "http://localhost:3000";
export const NEXT_PUBLIC_API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
