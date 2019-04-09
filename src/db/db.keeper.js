module.exports = function (db, log) {
    return {
        all: function () {
            log.log('getting keepers');
            db.any('Select * from keeper')
                .then(function (data) {
                    log.log('returned:', data);
                    res.send(data);
                })
                .catch(error => {
                    log.error(error);
                    res.end();
                });
        },
        one: function (login) {
            log.log('read keeper [%s]', login);
        }
    };
}