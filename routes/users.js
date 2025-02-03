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
                    return res.status(400).json({ error: err });
                }
                res.status(200).json({ users });
            });
        })
        .post((req, res) => {
            if (!req.body.name || !req.body.email) {
                return res.status(400).json({ error: 'Nome e e-mail são obrigatórios' });
            }

            db.insert(req.body, (err, user) => {
                if (err) {
                    return res.status(400).json({ error: err });
                }
                res.status(201).json(user);
            });
        });

    app.route('/users/admin')
        .get((req, res) => { 
            res.status(200).json({
                users: ['juan', 'carlos']
            });
        })
        .post((req, res) => {       
            if (!req.body.name || !req.body.email) {
                return res.status(400).json({ error: 'Nome e e-mail são obrigatórios' });
            }

            let newUser = { ...req.body, role: 'admin' };
            db.insert(newUser, (err, user) => {
                if (err) {
                    return res.status(400).json({ error: err });
                }
                res.status(201).json(user);
            });    
        });

    app.route('/users/:id')
        .get((req, res) => {
            db.findOne({ _id: req.params.id }).exec((err, user) => { 
                if (err || !user) {
                    return res.status(404).json({ error: 'Usuário não encontrado' });
                }
                res.status(200).json(user);
            });
        })
        .put((req, res) => {
            db.update({ _id: req.params.id }, { $set: req.body }, {}, (err, numReplaced) => {
                if (err) {
                    return res.status(400).json({ error: err });
                }
                res.status(200).json({ message: "Usuário atualizado com sucesso", numReplaced });
            });
        })
        .delete((req, res) => {
            db.remove({ _id: req.params.id }, {}, (err, numRemoved) => {
                if (err) {
                    return res.status(400).json({ error: err });
                }
                res.status(200).json({ message: "Usuário removido com sucesso", numRemoved });
            });
        });
};
