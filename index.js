//Load express module with `require` directive
var express = require('express')
var app = express()
//Define port
var port = 9994
//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.send('coding for dummies')
})
//Launch listening server on port 9994
app.listen(port, function () {
    console.log('this is project5 listening on port ${port}!')
})