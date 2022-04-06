import readJSON, { FILE_NAMES } from '../utils/readJSON';

type SpellDTO = {
  Name: string;
  Source: string;
  Level: string;
  'Casting Time': string;
  Duration: string;
  School: string;
  Range: string;
  Components: string;
  Classes: string;
  Text: string;
  'At Higher Levels': string;
};

export const findAllSpells = async () => {
  const file = await readJSON(FILE_NAMES.SPELLS);
  // console.log(file);
  const json = await JSON.parse(file);
  return json;
};

export const findSpellByName = async (name: string) => {
  const file = await readJSON(FILE_NAMES.SPELLS);
  const json = (await JSON.parse(file)) as SpellDTO[];
  const spell = json.find((spell) => spell.Name === name);
  if (spell) {
    return spell;
  } else {
    return 'No Spell With That Name Found';
  }
};
