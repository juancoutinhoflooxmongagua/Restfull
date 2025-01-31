const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => { 
    res.status(200).json({ 
        users: [{ 
            name: 'juan',
            email: 'contato@getHeapCodeStatistics.com.br',
            id: 1
        }]
    });
});

routes.get('/admin', (req, res) => {
    res.status(200).json({
        users: ['juan', 'carlos']
    });
});

module.exports = routes;
