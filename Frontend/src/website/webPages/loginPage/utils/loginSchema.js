import { z } from "zod";

export const loginSchema= z.object({
    email: z.string().email("Please Provide Proper Email Address")
});
