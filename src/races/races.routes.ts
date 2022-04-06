import fastify, { FastifyPluginAsync, FastifyPluginOptions } from 'fastify';
import { getRaceByNameHandler, RaceParams } from './races.handler';

const raceRoutes: FastifyPluginAsync = async (
  fastify,
  options: FastifyPluginOptions
) => {
  fastify.get<{ Params: RaceParams }>('/:name', getRaceByNameHandler);
};

export const registerRaceRoutes: FastifyPluginAsync = async (
  fastify,
  options: FastifyPluginOptions
) => {
  fastify.register(raceRoutes, { prefix: '/races' });
};
