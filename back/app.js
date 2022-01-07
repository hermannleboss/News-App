const express = require('express');
const mongoose=require('mongoose');
const userRoutes=require('./route/UserRoute');
const newsRoutes=require('./route/NewsRoute');
const path=require('path');

const app = express();
mongoose.connect('mongodb+srv://admin:admin@cluster0.wvu2u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/news', newsRoutes);
app.use('/api/auth', userRoutes);
module.exports = app;