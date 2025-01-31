const express = require('express');
const consign = require('consign')
const app = express(); 

consign().include('routes').into(app);

app.listen(3000, () => {
    console.log('Servidor rodando em http://127.0.0.1:3000');
});
