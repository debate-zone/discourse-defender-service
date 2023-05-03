import { openAiService } from './openAiService';

function isHateSpeech(text: string) {
    return openAiService.isHateSpeech(text);
}

export const hateSpeechService = {
    isHateSpeech,
};
