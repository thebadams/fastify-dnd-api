import fastify from 'fastify';
import fastifyEnv, { fastifyEnvOpt } from 'fastify-env';
import fastifyStatic from 'fastify-static';
import path, { join } from 'path';
import { registerAPIRoutes } from '../api/api.route';

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
  const path = join(__dirname, '../../public');
  server.log.info(path);
  server.register(fastifyStatic, {
    root: path,
  });

  server.get('/', async (request, reply) => {
    reply.sendFile('index.html');
  });

  server.register(registerAPIRoutes, { prefix: '/api' });
  await server.after();
  return server;
};

export default registerServer;
