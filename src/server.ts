import express from 'express';
import cors from 'cors';
import path from 'path';

import 'express-async-errors';

import './database/connection';

import routes from './routes';

import errorHandler from './errors/handler';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: 'HappyAPI 1.0'
    })
});

app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

let port = process.env.NODE_PORT || 3333;

app.listen(port, () => {
    console.log(`Server start in port ${port}`)
});