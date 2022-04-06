import { readFile } from 'fs/promises';
import { join } from 'path';

export enum FILE_NAMES {
  SPELLS = 'spells',
}

export default async function readJSON(file: FILE_NAMES) {
  const PATH = join(__dirname, `../../data/${file}/${file}.json`);
  try {
    const data = await readFile(PATH, 'utf-8');
    return data;
  } catch (error) {
    console.error(error);
    return 'There was an error reading the file';
  }
}
