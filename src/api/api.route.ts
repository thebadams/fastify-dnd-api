import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyPluginOptions,
} from 'fastify';
import { registerSpellRoutes } from '../spells/spells.route';

export const registerAPIRoutes: FastifyPluginAsync = async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.register(registerSpellRoutes);
};
