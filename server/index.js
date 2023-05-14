const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'vehiclesdb'
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/search', (req, res) => {
    const params = req.body

    const sql = "Select * from test_vehicles "
    db.query(sql, { params }, (err, result) => {
        console.log(result)
        res.send(result)
    })
})

app.listen(3001, () => {
    console.log('Running on port 3001')
})