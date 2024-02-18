const express = require('express');
const cors = require('cors');
const db = require('./connection');

const port = 8080;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.send({message:"hello"});
});

app.get('/users' , (req, res) =>{
    
    db.query(
        "SELECT * FROM users",
        (err, result) =>{
            if(err){
                console.log(err);
                return res.json(err);
            }
            else{
                return res.json(result);
            }
        }
    );
});

app.post('/create', (req, res) =>{
    const name = req.body.name;
    const phone =req.body.phone;
    const password = req.body.password;
    const userType = req.body.userType;
    const email = req.body.email;

    db.query(
        "INSERT INTO users(fullName, phoneNumber, password, userType, email) VALUES(?, ?, ?, ?, ?)",
        [name, phone, password, userType, email],
        (err, result)=>{
            if(err){
                console.log(err);
                res.send(name);
            }
            else{
                res.send({name, phone, password, userType, email});
            }
        }
    );
});


app.get('/users/:id' ,(req, res) =>{
    const id = req.params.id;
    db.query(
        "SELECT * FROM users WHERE userId=?",
        id,
        (err, result) =>{
            if(err){
                console.log(err);
            }
            else{
                res.send(result);
            }
        }
    );
});

app.put("/users/:id", (req, res) => {
    const id = req.params.id;
   
   
    db.query("UPDATE users SET fullName= ?,phoneNumber=?, password=?, userType=?, email= ? WHERE userId = ?",
        [
            req.body.fullName,
            req.body.phoneNumber,
            req.body.password,
            req.body.userType,
            req.body.email,
            id
        ], 
        (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.delete('/users/:id', (req, res) =>{
    const id = req.params.id;

    db.query(
        "DELETE FROM users WHERE userId = ?",
        id,
        (err, result) =>{
            if(err){
                console.log(err);
            }
            else{
                res.send(result);
            }
        }
    );
});
  
app.listen(port, ()=> {
    console.log("server running");
});

