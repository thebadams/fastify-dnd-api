import { FastifyInstance } from 'fastify';
import registerServer from './config/server';

const main = async () => {
  let server: FastifyInstance;

  server = await registerServer();
  console.log(process.env.PORT);
  try {
    let PORT;
    if (process.env.PORT) {
      PORT = process.env.PORT;
    } else {
      PORT = server.config.PORT;
    }
    await server.listen(PORT);
    server.log.info(`Server has started on Port: ${PORT}`);
  } catch (error) {
    server.log.error('There was an error starting the server', error);
  }
};

main();
