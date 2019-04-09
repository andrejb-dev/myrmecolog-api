var db = require('../../db/db');

module.exports = {
    readKeepers : function (req, res) {
        console.log('getting keepers');
        return res.send(db.keepers.all());
    },
    createKeeper : function (req, res) {
        return res.send('Keeper Added.');
    },
    readKeeper : function (req, res) {
        return res.send(db.keepers.one(req.params.login));
    }
}