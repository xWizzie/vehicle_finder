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
    compileSearch(req.body)

    const { search, params } = compileSearch(req.body)
    console.log(search, params)

    db.query(search, params, (err, result) => {
        // console.log(result, err)
        res.send(result)
    })
})

// app.post('/api/search', (req, res) => {
//     const params = req.body

//     const sql = "Select * from test_vehicles "
//     db.query(sql, { params }, (err, result) => {
//         console.log(result)
//         res.send(result)
//     })
// })

app.listen(3001, () => {
    console.log('Running on port 3001')
})

function compileSearch(body) {
    let search = 'Select * from test_vehicles where 1=1 '
    let params = []

    for (let key in body) {
        if (body.hasOwnProperty(key) && body[key] !== 'No preference') {
            params.push(body[key]);

            key = key === 'use' ? '`use`' : key
            search += ` AND ${key} = ?`;
        }
    }
    return { search: search, params: params }
}