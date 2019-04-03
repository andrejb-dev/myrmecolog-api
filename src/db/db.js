const { Client } = require('pg');
const client = new db({
    connectionString: process.env.DATABASE_URL,
    ssl: true
})

module.exports = {
    colonies: {
        all: function () {
            client.connect();
            client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
                if (err) throw err;
                for (let row of res.rows) {
                    console.log(JSON.stringify(row));
                }
                client.end();
                return res.rows;
            });
        }
    },
    users: {
        all: function () {
            return { id: 1, name: 'Ferko' }
        }
    }
}