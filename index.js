
var express = require('express'),
    app = express();

var server = app.listen(3000);
console.log('Servidor Express iniciado na porta %s', server.address().port);


//get route principal
var usersRouter = require('./src/routes/users'); 
app.use('/', usersRouter);