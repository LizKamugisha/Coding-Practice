// To check if server is running well
// console.log ('pdp pdp pdp pdp')

const express = require('express');
const bodyParser=require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended:true}))

// Connect browser to server using listen method
app.listen(3000,function(){
    console.log('listening on 3000')
})
// Connecting server to html page
app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html')
});

app.post('/quotes', (req, res) => { 
    console.log(req.body)
  });