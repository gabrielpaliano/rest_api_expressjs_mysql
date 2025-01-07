var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'a',
        database: 'todo'
    }
});

module.exports = knex;