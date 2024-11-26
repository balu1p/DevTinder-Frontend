import { z } from "zod";

export const formSchema = z.object({
    firstName: z
      .string()
      .min(1, { message: "First name is required." }), // Required field validation
    lastName: z
      .string()
      .min(1, { message: "Last name is required." }), // Required field validation
    email: z
      .string()
      .email({ message: "Please enter a valid email address." })
      .min(2, { message: "Email must be at least 2 characters." }), // Required field validation
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .max(32, { message: "Password must not exceed 32 characters." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/\d/, { message: "Password must contain at least one number." })
      .regex(/[@$!%*?&#]/, {
        message: "Password must contain at least one special character (@$!%*?&#).",
      }), // Required field validation with pattern constraints
    phoneNo: z
      .string()
      .min(10, { message: "Phone number must be at least 10 digits." })
      .max(15, { message: "Phone number must not exceed 15 digits." }), 
    age: z.string().optional(), // Optional
    profileImg: z.string().optional(), // Optional
    skills: z.string().optional(), // Optional
    gender: z.string().optional(), // Optional
    about: z.string().optional(), // Optional
  });