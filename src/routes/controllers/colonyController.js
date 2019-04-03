var db = require('../../db/db');

module.exports = {
    readColonies : function (req, res) {
        return res.send(db.colonies);
    },
    addColony : function (req, res) {
        db.push(db.colonies, {name:"colony" + db.colonies.length})
        return res.send('Colony Added.');
    },
    readColony : function (req, res) {
        return res.send('getting colony ' + req.params.colonyId);
    },
    updateColony : function (req, res) {
        return res.send('updating colony ' + req.params.colonyId);
    },
    deleteColony : function (req, res) {
        return npres.send('deleting colony ' + req.params.colonyId);
    }
}