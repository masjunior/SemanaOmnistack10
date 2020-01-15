const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:nodejs@cluster0-ummxx.mongodb.net/omnistack?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true        
});

app.use(express.json());
app.use(routes);
//GET, POST, PUT, DELETE

app.listen(3333);