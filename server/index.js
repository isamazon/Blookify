import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import readingRoutes from './routes/reading.js';
import readRoutes from './routes/read.js';
import userRoutes from './routes/users.js';
import tbrRoutes from './routes/tbr.js';
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Endpoints
app.use('/reading', readingRoutes);
app.use('/read', readRoutes);
app.use('/user', userRoutes);
app.use('/tbr', tbrRoutes);

app.get('/', (req, res) => {
  res.send('Hello to blookify, if you see this its working!!');
});
app.get('/favicon.ico', (req, res) => res.status(200));

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
