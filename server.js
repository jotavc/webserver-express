const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;

//middleware
app.use(express.static(__dirname + '/public'));

//Configuacion Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



//Para la ruta "/""
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'desguaces la selva'
    });

});

app.get('/about', (req, res) => {

    res.render('about', {
        img: '/assets/img/logo.jpg'
    });

});

//Levantando en puerto 
app.listen(port, () => {
    console.log(`Escuchando el puerto ${ port }`);
});