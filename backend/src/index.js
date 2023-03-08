import http from 'http';
import express from 'express';
import webRoute from './routers/web.js';

const app = express();

const server = http.createServer(app);

app.use('/', webRoute);


server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

