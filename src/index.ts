import { FastifyInstance } from 'fastify';
import registerServer from './config/server';

const main = async () => {
  let server: FastifyInstance;

  server = await registerServer();
  console.log(process.env.PORT);
  try {
    let port: string;
    if (process.env.PORT) {
      port = process.env.PORT;
    } else {
      port = server.config.PORT;
      server.config.PORT;
    }
    await server.listen(port);
    server.log.info(`Server has started on Port: ${port}`);
  } catch (error) {
    server.log.error('There was an error starting the server', error);
    process.exit(1);
  }
};

main();
