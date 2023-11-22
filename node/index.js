const express = require('express')
const connection = require('./config/db')
const { getRandomName } = require('./helpers')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const sql_insert = `INSERT INTO people(name) values('${getRandomName()}')`
    connection.query(sql_insert, (err, results, fields) => {
        if (err) res.status(500).send('Erro ao cadastrar nome no banco de dados')
    })

    const sql_select = 'SELECT name FROM people'
    connection.query(sql_select, (err, results, fields) => {
        if (err) res.status(500).send('Erro ao consultar o banco de dados')
        const names = results.map(user => `<li>${user.name}</li>`)
        res.send(`<h1>Full Cycle Rocks!</h1><ul>${names.toString().replace(/\,/g,'')}</ul>`)
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})
