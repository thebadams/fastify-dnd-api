import fastify, {
  FastifyPluginAsync,
  FastifyPluginOptions,
  RouteShorthandOptions,
  RouteShorthandOptionsWithHandler,
} from 'fastify';
import {
  findAllSpellsHandler,
  findSpellByNameHandler,
  SpellsParams,
} from './spells.handler';
import {
  spellNotFoundResponseSchema,
  spellResponseSchema,
} from './spells.schema';

const findAllSpellsOpt: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: spellResponseSchema,
      },
    },
  },
};

const findSpellByNameOpt: RouteShorthandOptions = {
  schema: {
    params: {
      name: { type: 'string' },
    },
    response: {
      200: spellResponseSchema,
      404: spellNotFoundResponseSchema,
    },
  },
};
const spellsRoutes: FastifyPluginAsync = async (
  fastify,
  options: FastifyPluginOptions
) => {
  fastify.get('/', findAllSpellsOpt, findAllSpellsHandler);
  fastify.get<{ Params: SpellsParams }>(
    '/:name',
    findSpellByNameOpt,
    findSpellByNameHandler
  );
};

export const registerSpellRoutes: FastifyPluginAsync = async (
  fastify,
  options: FastifyPluginOptions
) => {
  fastify.register(spellsRoutes, { prefix: '/spells' });
};
