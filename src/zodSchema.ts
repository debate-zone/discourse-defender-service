import { z } from 'zod';

export const hateSpeechInputSchema = z.object({
    text: z.string().min(1),
});

// z boolean
export const hateSpeechOutputSchema = z.object({
    hateSpeech: z.boolean(),
});
