# Usefull samples

## heroku cli
heroku pg:info --app myrmecolog-api
heroku pg:diagnose --app myrmecolog-api

heroku pg:ps
heroku pg:kill <process_id>
heroku pg:killall

heroku pg:psql postgresql-deep-42149 --app myrmecolog-api

## node.js

### req params
app.get('/tag/:id', async function (req, res) {
    var id = req.params.id;

*http://stackabuse.com/?page=2&limit=3*
app.get('/', async function(req, res) {
    let page = req.query.page;
    let limit = req.query.limit;

## pg-promise

### Queries

db - none, one, oneOrNone, many, manyOrNone = any. 

db.any('SELECT * FROM users WHERE active = $1', [true])
    .then(function(data) {
        // success;
    })
    .catch(function(error) {
        // error;
    });

db.none('INSERT INTO users(name, active) VALUES($1, $2)', ['John', true])
    .then(() => {
        // success;
    })
    .catch(error => {
        // error;
    });

db.func('myFuncName', [123, new Date()])
    .then(data => {
        console.log('DATA:', data); // print data;
    })
    .catch(error => {
        console.log('ERROR:', error); // print the error;
    });

db.proc('myProcName', [123, new Date()])
    .then(data => {
        console.log('DATA:', data); // print data, if any;
    })
    .catch(error => {
        console.log('ERROR:', error.message || error); // print the error;
    });

Single Parameter
    db.one('SELECT * FROM users WHERE id = $1', 123)
Multiple Parameters
    db.any('SELECT * FROM users WHERE created < $1 AND active = $2', [new Date(), true])
Named Parameters
    db.any('SELECT * FROM users WHERE name = ${name} AND active = $/active/',
    {
        name: 'John',
        active: true
    })

### Tasks
db.task(t => {
        // this.ctx = task config + state context;
        return t.one('SELECT * FROM users WHERE id = $1', 123)
            .then(user => {
                return t.any('SELECT * FROM events WHERE login = $1', user.name);
            });
    })

### Transactions
db.tx(t => {
        // `t` and `this` here are the same;
        // this.ctx = transaction config + state context;
        return t.batch([
            t.one('INSERT INTO users(name) VALUES($1) RETURNING id', 'John'),
            t.one('INSERT INTO events(code) VALUES($1) RETURNING id', 123)
        ]);
    })
    // using .spread(function(user, event)) is best here, if supported;
    .then(data => {
        console.log(data[0].id); // print new user id;
        console.log(data[1].id); // print new event id;
    })
    .catch(error => {
        // error
    });