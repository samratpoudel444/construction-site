import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const client = createClient({
  username: process.env.Redis_USERNAME,
  password:process.env.
  socket: {
    host: "redis-13126.c11.us-east-1-2.ec2.cloud.redislabs.com",
    port: 13126,
  },
});


Redis_USERNAME= default
=AV4XqYkyMhoZQrQfwHSDCLqVKJH83sct
Redis_Host= redis-13126.c11.us-east-1-2.ec2.cloud.redislabs.com
Redis_PORT= 13126