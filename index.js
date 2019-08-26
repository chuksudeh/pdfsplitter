const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
const port = 8000;
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})