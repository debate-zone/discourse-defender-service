import { defaultEndpointsFactory } from 'express-zod-api';
import { hateSpeechInputSchema, hateSpeechOutputSchema } from './zodSchema';
import { hateSpeechService } from './services/hateSpeechService';

export const hateSpeechEndpoint = defaultEndpointsFactory.build({
    method: 'post',
    input: hateSpeechInputSchema,
    output: hateSpeechOutputSchema,
    handler: async ({ input, options, logger }) => {
        logger.debug('Options:', options);

        const hateSpeech = await hateSpeechService.isHateSpeech(input.text);
        return { hateSpeech };
    },
});
