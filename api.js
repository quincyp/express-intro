const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hellow World')
})

app.get('/goodbye', (req, res) => {
    res.send('Goodbye')
})

app.listen(3000);