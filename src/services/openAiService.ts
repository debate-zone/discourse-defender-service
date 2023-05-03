import 'dotenv/config';
import { Configuration, OpenAIApi } from 'openai';
import { createHttpError, createLogger } from 'express-zod-api';

class OpenAiService {
    async isHateSpeech(text: string): Promise<boolean> {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);

        const prompt =
            'Is this hate speech?\n' + text + '\n' + 'Yes' + '\n' + 'No' + '\n';

        try {
            const result = await openai.createCompletion({
                model: process.env.OPENAI_MODEL_ID!,
                prompt: prompt,
                temperature: 0,
                max_tokens: 7,
            });

            if (result.data.choices[0].text) {
                return result.data.choices[0].text.includes('Yes');
            } else {
                return false;
            }
        } catch (error: any) {
            throw createHttpError(
                error.response.status,
                error.response.statusText,
            );
        }
    }
}

export const openAiService = new OpenAiService();
