import { FastifyRequest, FastifyReply } from 'fastify';
import { getRaceByName } from './races.service';

export interface RaceParams {
  name: string;
}

export async function getRaceByNameHandler<
  T extends FastifyRequest<{ Params: RaceParams }>
>(request: T, reply: FastifyReply) {
  const { name } = request.params;
  const data = await getRaceByName(name);
  return data;
}
