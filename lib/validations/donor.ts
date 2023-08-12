import * as z from "zod";

export const donorSchema = z.object({
  city: z.string(),
  name: z.string(),
  phoneNumber: z
    .string()
    .min(10, { message: "Invalid Phone Number" })
    .max(10, { message: "Invalid Phone Number" }),
  bloodType: z.string(),
});

export const findDonorSchema = z.object({
  city: z.string(),
  bloodType: z.string(),
});
