import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const client = createClient({
  username: process.env.Redis_USERNAME,
  password:process.env.Redis_Password,
  socket: {
    host: process.env.Redis_Host,
    port: process.env.Redis_PORT,
  },
});



= redis-13126.c11.us-east-1-2.ec2.cloud.redislabs.com
= 13126