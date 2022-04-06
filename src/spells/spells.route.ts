import fastify, { FastifyPluginAsync, FastifyPluginOptions } from 'fastify';
import { findAllSpellsHandler, findSpellByNameHandler } from './spells.handler';

const spellsRoutes: FastifyPluginAsync = async (
  fastify,
  options: FastifyPluginOptions
) => {
  fastify.get('/', findAllSpellsHandler);
  fastify.get('/:name', findSpellByNameHandler);
};

export const registerSpellRoutes: FastifyPluginAsync = async (
  fastify,
  options: FastifyPluginOptions
) => {
  fastify.register(spellsRoutes, { prefix: '/spells' });
};
