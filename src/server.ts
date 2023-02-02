import { app } from './app'
import { PrismaClient } from "@prisma/client";
import { databaseUrl } from './utils/databaseUrl';

export const prisma = new PrismaClient();

const port = 3000;

const server = app.listen( port, () => console.log( 'Server running (Port): ' + port ) );

console.log(databaseUrl);

console.log(process.env.DATABASE_URL);

export { server }