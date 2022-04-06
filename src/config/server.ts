import fastify from 'fastify';

const server = fastify({ logger: true });
export const PORT = 3001;

server.get('/hello', async (request, reply) => {
  return { message: 'Hello World' };
});
export default server;
