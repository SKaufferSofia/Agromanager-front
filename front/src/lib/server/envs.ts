import dotenv from "dotenv";
dotenv.config();

// Servidor de la base de datos
export const API_URL = process.env.API_URL || "http://localhost:3000";
export const NEXT_PUBLIC_API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

// Claves para inicio de sesion con google
export const GOOGLE_ID = process.env.GOOGLE_ID || "";
export const GOOGLE_SECRET = process.env.GOOGLE_SECRET || "";
export const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || "";

// Claves para la API de clima
export const API_WEATHER = process.env.API_KEY_WEATHER || "";

export const API_WEATHER_PROPS = process.env.NEXT_PUBLIC_WEATHER_PROPS || "";
