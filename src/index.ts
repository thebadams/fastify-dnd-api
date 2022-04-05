import { FastifyInstance } from 'fastify';
import server, { PORT } from './config/server';

const main = async (server: FastifyInstance, port: number) => {
  try {
    await server.listen(port);
    server.log.info(`Server has started on Port: ${port}`);
  } catch (error) {
    server.log.error('There was an error starting the server', error);
  }
};

main(server, PORT);
