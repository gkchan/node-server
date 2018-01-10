var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello world')
    console.log("test1")
})

app.get('/test', function (req, res) {
    res.send('test')
})

app.listen(5001)

// app.listen(5001, () => console.log("test2"))


// var server = app.listen(3000, function () {
//     var host = server.address().address
//     var port = server.address().port

//     console.log("test3")
// })

// set port