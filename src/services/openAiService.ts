import 'dotenv/config';
import { Configuration, OpenAIApi } from 'openai';
import { createHttpError } from 'express-zod-api';

class OpenAiService {
    async isHateSpeech(text: string): Promise<boolean> {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });

        const openai = new OpenAIApi(configuration);

        const prompt =
            'Is this hate speech?\n' + text + '\n' + 'Yes' + '\n' + 'No' + '\n';
        const result = await this.makeHateSpeechRequest(openai, prompt);

        return this.parseResult(result);
    }

    private async makeHateSpeechRequest(openai: OpenAIApi, prompt: string) {
        try {
            return await openai.createChatCompletion({
                model: process.env.OPENAI_MODEL_ID!,
                messages: [
                    {
                        role: 'system',
                        content: prompt,
                    },
                ],
                temperature: 0.2,
                max_tokens: 1,
            });
        } catch (error: any) {
            throw createHttpError(
                error.response.status,
                error.response.statusText,
            );
        }
    }

    private parseResult(result: any): boolean {
        if (result.data?.choices[0]?.message?.content) {
            return result.data.choices[0].message.content === 'Yes';
        } else {
            throw createHttpError(500, 'No data from model.');
        }
    }
}

export const openAiService = new OpenAiService();
