import { z } from 'zod'


// Account for "undefined" string, empty string and "null" string
export const serverParamSchema = z.string().min(1).refine(val => (val !== 'undefined' && val !== "null"), {
    message: "String cannot be 'undefined' or 'null'"
})
