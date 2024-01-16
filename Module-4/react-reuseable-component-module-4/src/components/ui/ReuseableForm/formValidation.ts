import { z } from "zod";

export type TFormValidationType = z.infer<typeof FormZodSchema>;

export const FormZodSchema = z.object({
  name: z.string().min(3, { message: "name is required" }),
  email: z.string().email("Email is required"),
});
