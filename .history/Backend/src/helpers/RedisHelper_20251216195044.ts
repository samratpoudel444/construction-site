import { createClient } from "redis";
import dotenv from "dotenv";
import { promises } from "dns";

dotenv.config();

const RedisClient= async():Promise<Redis>=>
{
const client = createClient({
  username: process.env.Redis_Username,
  password: process.env.Redis_Password,
  socket: {
    host: process.env.Redis_Host,
    port: Number(process.env.Redis_PORT),
  },
});

client.on("error", (err) => {
  console.error("Redis Client Error", err);
});

await client.connect();

return client;
}

export default  RedisClient;
