import {inputSchema} from "./zodSchema"
import {z} from "zod"

export type Input = z.infer<typeof inputSchema>
