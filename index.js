const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/info', function(req,res) {
    res.send('user' + process.env.MONGODB_USER);
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})