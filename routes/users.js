module.exports = (app) => {
    app.get('/users', (req, res) => { 
        res.status(200).json({ 
            users: [{ 
                name: 'juan',
                email: 'contato@getHeapCodeStatistics.com.br',
                id: 1
            }]
        });
    });

    app.get('/users/admin', (req, res) => { 
        res.status(200).json({
            users: ['juan', 'carlos']
        });
    });

    app.post('/users/admin', (req, res) => {       
            res.json(req.body)
        })};
