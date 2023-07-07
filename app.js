const express = require('express');
const app = express();
const dotenv = require(dotenv);

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.post('/insert',(req,res)=>{
    
})