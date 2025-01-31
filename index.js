const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => { 
    console.log('URL:', req.url);
    console.log('METHOD:', req.method);

    res.status(200).setHeader('Content-Type', 'text/html').end('<h1>RODANDO</h1>');
});

app.get('/users', (req, res) => { 
    res.status(200).json({ 
        users: [{ 
            name: 'juan',
            email: 'contato@getHeapCodeStatistics.com.br',
            id: 1
        }]
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://127.0.0.1:3000');
});
