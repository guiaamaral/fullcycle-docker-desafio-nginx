const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
})

module.exports = connection
