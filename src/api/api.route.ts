import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyPluginOptions,
} from 'fastify';
import { registerSpellRoutes } from '../spells/spells.routes';
import { registerRaceRoutes } from '../races/races.routes';

export const registerAPIRoutes: FastifyPluginAsync = async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.register(registerSpellRoutes);
  server.register(registerRaceRoutes);
};
