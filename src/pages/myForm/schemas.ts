import { literal, z } from "zod";

export const formSchema = z.object({
    name: z.coerce.string().min(1, "Name is required"),
    age: z.coerce.number().or(literal('')),  // 可選的欄位
    email: z.coerce.string().email().or(literal('')),  // 另一個可選的欄位
});