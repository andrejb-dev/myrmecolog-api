module.exports.attachHandlers = function (router) {

    // get requests
    router.get('/users/:user_email', readUser);

    // post requests
    router.post('/users', createUser);

    // put requests
    //router.put('/api/supporters/:email/password', changeSupportersPassword);

};

function readUser(req, res) {
    //return res.json([ ... ]);
    res.send('getting user..');
};

function createUser(req, res) {

    //return res.json([ ... ]);
    res.send('creating user..');
};