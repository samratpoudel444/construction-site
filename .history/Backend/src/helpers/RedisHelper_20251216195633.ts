import { createClient, RedisClientType } from "redis";
import dotenv from "dotenv";


dotenv.config();

console.log(process.env.);

const client = createClient({
  username: process.env.Redis_Username,
  password: process.env.Redis_Password,
  socket: {
    host: process.env.Redis_Host,
    port: Number(process.env.Redis_PORT),
  },
});

// client.on("error", (err) => {
//   console.error("Redis Client Error", err);
// });




export default  client;
