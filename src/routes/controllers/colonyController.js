module.exports = {
    readColonies : function (req, res) {
        res.send('getting colonies..');
    },
    addColony : function (req, res) {
        res.send('adding colony..');
    },
    readColony : function (req, res) {
        res.send('getting colony ' + req.params.colonyId);
    },
    updateColony : function (req, res) {
        res.send('updating colony ' + req.params.colonyId);
    },
    deleteColony : function (req, res) {
        res.send('deleting colony ' + req.params.colonyId);
    }
}