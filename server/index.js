require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {CONNECTION_STRING, SERVER_PORT} = process.env
const ctrl = require('./controller/shelfieController')

const app = express()

app.use(express.json())

massive ({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log("Database is connected")
})

app.get('/api/shelfies', ctrl.getShelfies)
app.post('/api/shelfies', ctrl.addShelfie)

app.listen(SERVER_PORT, () => console.log(`server is running on ${SERVER_PORT}`))
