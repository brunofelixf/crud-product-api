import { app } from './app'
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

const port = 3000;

let server = app.listen( port, () => console.log( 'Server running (Port): ' + port ) );

export { server }