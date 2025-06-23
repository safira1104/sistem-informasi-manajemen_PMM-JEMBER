import { z } from "zod";

const loginSchemaAdmin = z.object({
  username: z.string().trim().min(1, "Required"),
  password: z.string().min(1, "Required").min(8, "Minimum 8 characters"),
  specialCode: z.string().trim().min(1, "Required"),
});

const loginSchemaGuest = z.object({
  nama: z.string().trim().min(1, "Required"),
  email: z.string().email("Invalid email").min(1, "Required"),
  password: z.string().min(1, "Required").min(8, "Minimum 8 characters"),
});

const registerSchemaGuest = z.object({
  nama: z.string().trim().min(1, "Required"),
  email: z.string().email("Invalid email").min(1, "Required"),
  password: z.string().min(1, "Required").min(8, "Minimum 8 characters"),
  verifikasiPassword: z
    .string()
    .min(1, "Required")
    .min(8, "Minimum 8 characters"),
}).refine((data) => data.password === data.verifikasiPassword, {
  message: "Passwords do not match",
  path: ["verifikasiPassword"],
});


export {
  loginSchemaAdmin,
  loginSchemaGuest,
  registerSchemaGuest,
};
