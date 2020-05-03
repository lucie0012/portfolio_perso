/*
 * Import Modules
 ******************************/
const express = require('express');
const app = express();
const path = require('path')

/*
 * Gestion urlDB et port
 ******************************/
const config = require('./api/config/config');
const port = config.dev.port;


/* Gestion fichiers statiques
 ******************************/
app.use(express.static('public'));


/*
 * Route
 ******************************/
app.use('/', (req, res) => {
    if(req.path == "/")
    res.sendFile(path.join(__dirname + '/index.html'));
    else
    res.sendFile(path.join(__dirname + '/error.html'));
});


/*
 * Port
 ******************************/
app.listen(port, function () {
    console.log("Le serveur tourne sur le port : " + port);
});