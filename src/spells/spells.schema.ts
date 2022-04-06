export type SpellDTO = {
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

const stringSchema = {
  type: 'string',
};

export const spellResponseSchema = {
  type: 'object',
  properties: {
    Name: stringSchema,
    Source: stringSchema,
    Level: stringSchema,
    'Casting Time': stringSchema,
    Duration: stringSchema,
    School: stringSchema,
    Range: stringSchema,
    Components: stringSchema,
    Classes: stringSchema,
    Text: stringSchema,
    'At Higher Levels': stringSchema,
  },
};

export const spellNotFoundResponseSchema = {
  type: 'object',
  properties: {
    message: {
      type: 'string',
    },
  },
};
