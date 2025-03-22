import { config } from "dotenv";

config({
    path: `.env.${process.env.NODE_ENV || "development"}.local`,
})

// console.log(process.env.PORT);
export const { PORT,NODE_ENV, DB_URI } = process.env;