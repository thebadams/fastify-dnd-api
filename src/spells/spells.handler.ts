import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteHandlerMethod,
  RouteShorthandMethod,
} from 'fastify';
import { findAllSpells, findSpellByName } from './spells.service';
export interface SpellsParams {
  name: string;
}
export const findAllSpellsHandler: RouteHandlerMethod = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const allSpells = await findAllSpells();
  return allSpells;
};

export async function findSpellByNameHandler<
  T extends FastifyRequest<{ Params: SpellsParams }>
>(this: FastifyInstance, request: T, reply: FastifyReply) {
  const { name } = request.params;

  const spell = await findSpellByName(name);
  if (spell === 'No Spell With That Name Found') {
    reply.statusCode = 404;
    return {
      message: spell,
    };
  } else {
    return spell;
  }

  // reply.code(204);
}
