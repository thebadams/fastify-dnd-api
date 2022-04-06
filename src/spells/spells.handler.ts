import { RouteHandlerMethod } from 'fastify';
import { findAllSpells } from './spells.service';

export const findAllSpellsHandler: RouteHandlerMethod = async (
  request,
  reply
) => {
  const allSpells = await findAllSpells();
  return allSpells;
};
