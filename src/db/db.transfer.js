module.exports = function (db, log) {
    return {
        add: transfer => {
            log.log('insert transfer', transfer);
            return db.one({
                text: 'INSERT INTO transfer(colony_id, date, new_facility, duration) VALUES($1,$2,$3,$4) RETURNING *',
                values: [transfer.colonyId, transfer.date || Date.now(), transfer.newFacility, transfer.duration]
            });
        }
    };
}