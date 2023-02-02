import { app } from './app'
import { PrismaClient } from "@prisma/client";
import { setDatabaseUrl } from './utils/databaseUrl';

export const prisma = new PrismaClient();

console.log('Environment: ' + process.env.NODE_ENV);

setDatabaseUrl();

const port = 3000;

const server = app.listen( port, () => console.log( 'Server running (Port): ' + port ) );

export { server }