import express from 'express';
import { routerApp } from './routes/product.routes';

const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use( '', routerApp );

export { app };
