require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()

const {CONNECTION_STRING, SERVER_PORT} = process.env
const ctrl = require('./controller/shelfieController')

app.use(express.json())

massive ({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log("Database is connected")
    app.listen(SERVER_PORT, () => console.log(`server is running on ${SERVER_PORT}`))
})

app.get('/api/shelfie', ctrl.getShelfies)
app.post('/api/shelfie', ctrl.addShelfie)
app.delete('/api/shelfie/:id', ctrl.deleteShelfie)
app.put('/api/shelfie/:id', ctrl.editShelfie)

