import fastify from 'fastify';
import { registerSpellRoutes } from '../spells/spells.route';

const server = fastify({ logger: true });
export const PORT = 3001;

server.get('/hello', async (request, reply) => {
  return { message: 'Hello World' };
});

server.register(registerSpellRoutes, { prefix: '/api' });
export default server;
