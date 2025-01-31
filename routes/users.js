let NeDB = require('nedb');

let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

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
        db.insert(req.body, (err, user) => {
            if (err) {
                console.log(`Error: ${err}`);
                res.status(400).json({
                    error: err
                });
            } else {
                res.status(200).json(user);
            }
        });    
    });
};
