import { Routing } from 'express-zod-api';
import { hateSpeechEndpoint } from './endpoint';

export const routing: Routing = {
    v1: {
        hateSpeech: hateSpeechEndpoint,
    },
};
