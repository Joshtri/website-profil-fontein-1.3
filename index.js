// import createError from 'http-errors';
import express from 'express';
import path from 'path';

import { config } from 'dotenv';

import { fileURLToPath } from 'url';


import connectDB from './config/dbConfig.js';

import indexRouter from './routes/index.route.js';
import statistikRouter from './routes/statistik.route.js';


// Connect to MongoDB
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Tentukan lokasi folder views
const viewsDirectories = [
    path.join(__dirname, 'views'),
    path.join(__dirname, 'views', 'statistik'),

];


// view engine setup
app.set('views', viewsDirectories);
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

// app.use(favicon(path.join(__dirname, 'public', 'images', '489px-LOGO_KOTA_KUPANG (1 300x300).png')));


app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter, statistikRouter);



app.listen(port, () => console.log(`Listening on ${port}`));