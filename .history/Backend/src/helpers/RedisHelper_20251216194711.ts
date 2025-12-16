import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const 
const client = createClient({
  username: process.env.Redis_USERNAME,
  password:process.env.Redis_Password,
  socket: {
    host: process.env.Redis_Host,
    port: Number(process.env.Redis_PORT),
  },
});


client.on("error", (err) => {
  console.error("Redis Client Error", err);
});

await client.connect();
