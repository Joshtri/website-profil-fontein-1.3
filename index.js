// import createError from 'http-errors';
import express from 'express';
import path from 'path';

import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.route.js';


dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

// app.use(favicon(path.join(__dirname, 'public', 'images', '489px-LOGO_KOTA_KUPANG (1 300x300).png')));


app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);



app.listen(port, () => console.log(`Listening on ${port}`));