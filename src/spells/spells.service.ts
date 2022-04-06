import { parse } from 'csv';
import { readFile } from 'fs/promises';
import { join } from 'path';
export const findAllSpells = async () => {
  const PATH = join(__dirname, '../../data/spells/cantrips.json');
  const file = await readFile(PATH, 'utf-8');
  console.log(file);
  const json = await JSON.parse(file);
  return json;
};

export const findSpellByName = async (name: string) => {
  return `Spell Name: ${name}`;
};
