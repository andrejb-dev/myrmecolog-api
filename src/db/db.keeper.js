module.exports = function (db, log) {
    return {
        one: login => {
            log.log('read keeper [%s]', login);
            return db.task(t => getKeeperTree(t, login));
        },
        add: keeper => {
            log.log('insert keeper', keeper);
            return db.task(t => {
                return t.one({
                    text: 'INSERT INTO keeper(login, password) VALUES($1,$2) RETURNING *',
                    values: [keeper.login, keeper.password]
                });
            });
        }
    };
}

function getKeeperTree(t, login) {
    return t.oneOrNone('Select * from keeper WHERE login = $1', login)
        .then(keeper => {
            if (keeper) {
                return t.map('Select * from colony WHERE keeper_id = $1', keeper.id, colony => {
                    t.any('Select * from inspection WHERE colony_id = $1', colony.id)
                        .then(inspections => {
                            colony.inspections = inspections;
                            return colony;
                        });
                    t.any('Select * from task WHERE colony_id = $1', colony.id)
                        .then(tasks => {
                            colony.tasks = tasks;
                            return colony;
                        });
                    return t.any('SELECT * FROM transfer WHERE colony_id = $1', colony.id)
                        .then(transfers => {
                            colony.transfers = transfers;
                            return colony;
                        });
                }).then(t.batch)
                    .then(colonies => {
                        keeper.colonies = colonies;
                        return keeper;
                    });
            }
        });
}