import {z} from "zod"

export const inputSchema = z.object({
    name: z.string().optional(),
})

export const outputSchema = z.object({
    greetings: z.string(),
})
