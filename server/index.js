const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const connection = require('./database')
const cors = require('cors')
app.use(cors())

const port = 8080

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//MySQL connection
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student'
})

//GET student data
app.get('/display', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`Connected as id $${connection.threadId}`)

        connection.query('SELECT * FROM admit', (err, rows) => {
            connection.release()

            if(!err){
                res.send(rows)
            }
            else{
                console.log(err)
            }
        })
    })
})

//GET single student data
app.get('/admit/:class/:roll', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`Connected as id ${connection.threadId}`)

        connection.query('SELECT * FROM admit WHERE class= ? AND roll = ?', [req.params.class, req.params.roll], (err, rows) => {
            connection.release()

            if(!err){
                res.send(rows)
            }
            else{
                console.log(err)
            }
        })
    })
})

//LOGIN
app.post('/login/:class/:roll', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`Connected as id ${connection.threadId}`)

        connection.query('SELECT * FROM admit WHERE class= ? AND roll = ?', [req.params.class, req.params.roll], (err, rows) => {
            connection.release()

            if(!err){
                res.send(rows)
            }
            else{
                console.log(err)
            }
        })
    })
})

//POST student data
app.post('/admit/enter-details', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`Connected as id ${connection.threadId}`)

        const data = req.body

        connection.query('INSERT INTO admit SET ?', data, (err, rows) => {
            connection.release()

            if(!err){
                res.send(rows)
            }
            else{
                console.log(err)
            }
        })

        console.log(req.body)
    })
})

//Port listening
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})