import { z } from "zod";

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, "First name must contain at least 2 characters.")
      .max(30, "First name cannot exceed 30 characters."),

    lastName: z
      .string()
      .trim()
      .min(2, "Last name must contain at least 2 characters.")
      .max(30, "Last name cannot exceed 30 characters."),

    email: z
      .string()
      .trim()
      .min(1, "Please enter your email.")
      .email("Please enter a valid email address."),

    password: z.string().min(8, "Password must contain at least 8 characters."),

    confirmPassword: z.string().min(1, "Please confirm your password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match.",
    path: ["confirmPassword"],
  });

export type SignUpValues = z.infer<typeof signUpSchema>;
