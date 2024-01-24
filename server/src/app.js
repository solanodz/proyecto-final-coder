import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path';
import cors from 'cors';

import indexRouter from './routers/views/index.router.js';
import usersRouter from './routers/api/users.router.js';
import productsRouter from './routers/api/products.router.js';
import { __dirname } from './utils.js';

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use('/', indexRouter);
app.use('/api', usersRouter, productsRouter);

app.use((error, req, res, next) => {
    const message = `Ah ocurrido un error desconocido 😨: ${error.message}`;
    console.log(message);
    res.status(500).json({ status: 'error', message });
});

export default app;