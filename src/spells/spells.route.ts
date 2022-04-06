import fastify, { FastifyPluginAsync, FastifyPluginOptions } from 'fastify';
import { findAllSpellsHandler } from './spells.handler';

const spellsRoutes: FastifyPluginAsync = async (
  fastify,
  options: FastifyPluginOptions
) => {
  fastify.get('/', findAllSpellsHandler);
};

export const registerSpellRoutes: FastifyPluginAsync = async (
  fastify,
  options: FastifyPluginOptions
) => {
  fastify.register(spellsRoutes, { prefix: '/spells' });
};
