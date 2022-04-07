# Fastify Dungeons and Dragons API

## Description

This is an informational API built using fastify and meant to be used in conjunction with a dungeons and dragons character builder

## Tech Stack

The technology stack used in this project includes:

- Language: Typescript
- Runtime: Node.js
- Web Framework: Fastify
- Database ORM: Prisma
- Database: PostrgresSQL
- Container: Docker

## Setting up for local development

I have created npm scripts to make the process of forking this project and installing it easier. This assumes you have node, prisma, and docker already installed and set up. If you haven't installed those tools, install them for your personal computer's OS before proceeding.

1. Run `npm install` from the root folder. This will install all the necessary npm packages
1. Add a .env to the root directory, and add a preferred value for `POSTGRES_USER` and `POSTGRES_PASSWORD` in the .env
1. Run `npm run docker:compose:start`. This will create a docker container that contains a postgres instance.
1. Add a value to the .env file for `DATABASE_URL=postgres://$POSTGRES_USER:$POSTGRES_PASSWORD/$DATABASE_NAME?schema=public` where $POSTGRES_USER and $POSTGRES_PASSWORD are your user and password set up in step 2, and $DATABASE_NAME is the name of the database you would like to create.
1. Run `npm run migrate` to create the database using prisma.
1. Start the server in dev mode using `npm run dev`. This will start the server on port 3001. Define a PORT variable in your .env to change which port the fastify server starts on.
