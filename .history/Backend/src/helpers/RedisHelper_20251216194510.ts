import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const client = createClient({
  username: process.env.Redis_USERNAME,
  password:process.env.Redis_Password,
  socket: {
    host: process.env.,
    port: 13126,
  },
});



Redis_Host= redis-13126.c11.us-east-1-2.ec2.cloud.redislabs.com
Redis_PORT= 13126