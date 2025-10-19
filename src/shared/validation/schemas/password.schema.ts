import { z } from "zod";

export const passwordSchema = z.string().min(8, "Too short");
