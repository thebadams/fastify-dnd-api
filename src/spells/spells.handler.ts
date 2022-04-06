import { FastifyReply, FastifyRequest, RouteHandlerMethod } from 'fastify';
import { findAllSpells, findSpellByName } from './spells.service';
interface SpellsParams {
  name: string;
}
export const findAllSpellsHandler: RouteHandlerMethod = async (
  request,
  reply
) => {
  const allSpells = await findAllSpells();
  return allSpells;
};

export const findSpellByNameHandler = async (
  request: FastifyRequest<{ Params: SpellsParams }>,
  reply: FastifyReply
) => {
  const { name } = request.params;
  const spell = await findSpellByName(name);
  return spell;
};
