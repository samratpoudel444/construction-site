import { createClient } from "redis";
im

const client = createClient({
  username: "default",
  password: "AV4XqYkyMhoZQrQfwHSDCLqVKJH83sct",
  socket: {
    host: "redis-13126.c11.us-east-1-2.ec2.cloud.redislabs.com",
    port: 13126,
  },
});
