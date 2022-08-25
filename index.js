import express from 'express';
import router from './routes/servers.js';

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(router);

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});