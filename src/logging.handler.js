module.exports = (name) => {
    return {
        error: function (error) {
            console.log(name + ': Error occured: ', error);
            error.logged = true;
        },
        log: function (msg, params) {
            console.log(name + ': ' + msg, params || '');
        },
        json: (obj) => console.log(JSON.stringify(obj))
    };
}