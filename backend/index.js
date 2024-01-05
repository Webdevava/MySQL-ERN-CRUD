const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crud'
})

//fetch students
app.get('/',(req,res)=>{
    const sql = "SELECT * FROM student";
    db.query(sql,(err,result)=>{
        if(err) return res.json({message:"Error Inside Server"})
        return res.json(result)
    })
})

//create student
app.post('/student',(req,res)=>{
    const sql = "INSERT INTO student (`Name`,`Email`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql,[values],(err,result)=>{
        if(err) return res.json({message:"Error Inside Server POST STUDENT"})
        return res.json(result)
    })
})

app.get('/read/:id',(req,res)=>{
    const sql = "SELECT * FROM student WHERE ID = ?";
    const id =  req.params.id;
    db.query(sql,[id],(err,result)=>{
        if(err) return res.json({message:"Error Inside Server"})
        return res.json(result)
    })
})

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE student SET `Name`=?, `Email`=? WHERE ID =?";
    const id = req.params.id;
    db.query(sql, [req.body.name, req.body.email, id], (err, result) => {
        if (err) return res.json({ message: "Error Inside Server" });
        return res.json(result);
    });
});



app.delete('/delete/:id',(req,res)=>{
    const sql = "DELETE FROM student WHERE ID =?";
    const id =  req.params.id;
    db.query(sql,[id],(err,result)=>{
        if(err) return res.json({message:"Error Inside Server"})
        return res.json(result)
    })
})


app.listen(8000,()=>{
    console.log("Server is running")
})