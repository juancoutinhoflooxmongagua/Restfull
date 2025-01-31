const express = require('express');

const routesIndex = require('./routes/index');
const routesUsers = require('./routes/users');

const app = express(); 

app.use(routesIndex);
app.use('/users', routesUsers);

app.listen(3000, () => {
    console.log('Servidor rodando em http://127.0.0.1:3000');
});
