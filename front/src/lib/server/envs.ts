import dotenv from "dotenv";
dotenv.config();

export const API_URL = process.env.API_URL || "http://localhost:3000";
export const NEXT_PUBLIC_API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
export const API_KEY_WEATHER = "AIzaSyClIbFxja8EUW8C0woPJMf_gSrHZh5K-2k";
export const API_KEY_WEATHER_PROPS = "63c3cb03c92a4f7f878205613243107";

// export const GOOGLE_ID = process.env.GOOGLE_ID || "";
// export const GOOGLE_SECRET = process.env.GOOGLE_SECRET || "";
