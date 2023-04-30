const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'student',
    user: 'root',
    password: '9541'
})

module.exports = connection;