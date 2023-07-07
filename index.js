const express = require('express')
const app = express();
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    user:'root',
    host:'35.232.135.50',
    password:'4060',
    database:'mydb'
});
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
app.post('/create',(req,res)=>{
    const name = req.body.name
    const age = req.body.age
    const country = req.body.country
    const position = req.body.position
    const wage = req.body.wage

    db.query('INSERT INTO employees (name,age,country,position,wage) VALUES (?,?,?,?,?)',[name,age,country,position,wage]
    ,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Values Inserted")
        }
    })
})
app.get('/employees',(req,res)=>{
    db.query("Select * from employees",(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})



app.listen(8080,()=>{
    console.log('Server is running on port 8080')
})