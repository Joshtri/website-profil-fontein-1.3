// Import modules
import express from 'express';
import path from 'path';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import createError from 'http-errors'; // Import createError for handling errors
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

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter, statistikRouter);

// Middleware untuk menangani kesalahan 404
app.use((req, res, next) => {
  next(createError(404));
});

// Middleware untuk menangani kesalahan
app.use((err, req, res, next) => {
  // Atur status kesalahan
  res.status(err.status || 500);
  // Render halaman kesalahan
  res.render('error', {
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}, // Hanya tampilkan stacktrace di development
  });
});

app.listen(port, () => console.log(`Listening on ${port}`));
