import fastify from 'fastify';
import fastifyEnv, { fastifyEnvOpt } from 'fastify-env';
import { registerSpellRoutes } from '../spells/spells.route';

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

const options: fastifyEnvOpt = {
  confKey: 'config',
  schema,
  data: process.env,
  dotenv: true,
};
const registerServer = async () => {
  const server = fastify({ logger: true });
  server.register(fastifyEnv, options).ready((error) => {
    if (error) {
      console.error(error);
    }

    console.log(server.config);
  });

  server.get('/hello', async (request, reply) => {
    return { message: 'Hello World' };
  });

  server.register(registerSpellRoutes, { prefix: '/api' });
  await server.after();
  return server;
};

export default registerServer;
