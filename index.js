const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const knex = require('./knex')
const cors = require('cors')
const parser = require('body-parser')
const dotenv = require('dotenv').config()

app.use(cors())
app.use(parser.json())

// app.post('/my-post-route', (req, res) => {
//     res.send(`You hit /my-post-route with the following message: ${req.body.message}`)
//   })

  knex('reminders')
.insert({name: 'chores', description: 'sweep, bitch'})

app.get('/', function(req, res, next){
     knex('reminders')
     .then((rows) => {
         res.send(rows)
     })
     .catch((err) => {
         next(err)
     })
})

app.post('/reminders', (req, res, next) => {
    knex('reminders').insert(req.body)
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

app.listen(port, function() {
     console.log(`listening on port ${port}`)
})
