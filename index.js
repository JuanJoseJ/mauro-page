var express = require('express')
var app = express()

//Start the app at port 8000
app.listen(process.env.PORT || 8000, function(){
    console.log("App corriendo en el puerto "+this.address().port)
})

app.use(express.static(__dirname+'/views'))

app.get('/', (req, res) => {
    console.log('GET request a /')
    res.sendFile('index.html');
})



