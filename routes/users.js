let NeDB = require('nedb');

let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = (app) => {
    app.route('/users')
        .get((req, res) => { 
            db.find({}).sort({ name: 1 }).exec((err, users) => {
                if (err) {
                    if (app.utils && app.utils.error && typeof app.utils.error.send === 'function') {
                        app.utils.error.send(err, req, res);
                    } else {
                        res.status(400).json({ error: err });
                    }
                } else {
                    res.status(200).json({
                        users: users
                    });
                }
            });
        })
        .post((req, res) => {
            db.insert(req.body, (err, user) => {
                if (err) {
                    console.log(`Error: ${err}`);
                    if (app.utils && app.utils.error && typeof app.utils.error.send === 'function') {
                        app.utils.error.send(err, req, res);
                    } else {
                        res.status(400).json({ error: err });
                    }
                } else {
                    res.status(200).json(user);
                }
            });
        });

    app.route('/users/admin')
        .get((req, res) => { 
            res.status(200).json({
                users: ['juan', 'carlos']
            });
        })
        .post((req, res) => {       
            db.insert(req.body, (err, user) => {
                if (err) {
                    console.log(`Error: ${err}`);
                    if (app.utils && app.utils.error && typeof app.utils.error.send === 'function') {
                        app.utils.error.send(err, req, res);
                    } else {
                        res.status(400).json({ error: err });
                    }
                } else {
                    res.status(200).json(user);
                }
            });    
        });
};
