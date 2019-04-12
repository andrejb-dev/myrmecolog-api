module.exports = function (db, log) {
    return {
        add: task => {
            log.log('insert task', task);
            return db.one({
                text: 'INSERT INTO task(colony_id, date_created, date_due, title, description) VALUES($1,$2,$3,$4,$5) RETURNING *',
                values: [task.colonyId, task.dateCreated || Date.now(), task.dateDue, task.title, task.decription]
            });
        }
    };
}