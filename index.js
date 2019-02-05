const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', function(req, res, next){
     res.send('bad bitch iz working')
})

app.listen(port, function() {
     console.log(`listening on port ${port}`)
})
