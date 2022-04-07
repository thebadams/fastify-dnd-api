import fastifyEnv, { fastifyEnvOpt } from 'fastify-env';

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      PORT: string;
    };
  }
}

const schema = {
  type: 'object',
  required: ['PORT'],
  properties: {
    PORT: {
      type: 'string',
      default: 3001,
    },
  },
};

export const envOptions: fastifyEnvOpt = {
  confKey: 'config',
  schema,
  data: process.env,
  dotenv: true,
};
