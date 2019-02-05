const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const knex = require('./knex')
const cors = require('cors')
const parser = require('body-parser')
const dotenv = require('dotenv').config()

app.use(cors())
app.use(parser.json())


app.get('/', function(req, res, next){
     knex('reminders')
     .then((rows) => {
         res.send(rows)
     })
     .catch((err) => {
         next(err)
     })
})

app.listen(port, function() {
     console.log(`listening on port ${port}`)
})
