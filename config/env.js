import { config } from "dotenv";

config({
    path: `.env.${process.env.NODE_ENV || "development"}.local`,
})

// console.log(process.env.PORT);
export const { 
    PORT,
    NODE_ENV, 
    DB_URI,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    ARCJET_KEY,
    ARCJET_ENV
} = process.env;