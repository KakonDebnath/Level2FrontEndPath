import { z } from "zod";

export type TNormalForm = z.infer<typeof SignupZodSchema>;

export const SignupZodSchema = z.object({
  name: z.string().min(3, { message: "name is required" }),
  email: z.string().email("Email is required"),
  password: z.string().min(8, "password must be at least 8 characters"),
  district: z.string().min(3, "District must be required"),
  address: z.string().min(5, "Address must be required"),
});
