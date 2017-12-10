var mysql = require('mysql');

require('dotenv').config();

if (process.env.CLEARDB_DATABASE_URL) {
    var connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
}
else
{
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: process.env.password,
        database: 'burgers_db'
    });
};

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
