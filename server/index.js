const express = require('express');
const app = express();
const PORT = '8080';

const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.API_KEY);

const path = require('path');
const pathToDist = path.join(__dirname, '..', 'giphy-search', 'dist');

const handleFetch = require('./utils/handleFetch');

//controllers
const serveStatic = express.static(pathToDist);

const serveGifs = async (req, res, next) => {

    const search = req.query.search || null;

    if (search) {
        const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${search}&limit=3&rating=g`;
        const [data, error] = await handleFetch(API_URL);
        if (error) {
            console.log(error.message);
            return res.status(404).send(error);
        }
        res.send(data);
    } else if (!search) {

        const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=3&rating=g`;
        const [data, error] = await handleFetch(API_URL);
        if (error) {
            console.log(error.message);
            return res.status(404).send(error);
        }
        res.send(data);
    }
}

// and route it to an endpoint

app.use(serveStatic);
app.get('/api/gifs', serveGifs);


app.listen(PORT);