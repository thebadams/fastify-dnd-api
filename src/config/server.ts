import fastify from 'fastify';

const server = fastify({ logger: true });
export const PORT = 3001;
export default server;
