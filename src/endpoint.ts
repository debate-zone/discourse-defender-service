import { defaultEndpointsFactory } from 'express-zod-api';
import { inputSchema, outputSchema } from './zodSchema';

export const helloWorldEndpoint = defaultEndpointsFactory.build({
    method: 'get',
    input: inputSchema,
    output: outputSchema,
    handler: async ({ input, options, logger }) => {
        logger.debug('Options:', options);
        return { greetings: `Hello, ${input.name || 'World'}. Happy coding!` };
    },
});
