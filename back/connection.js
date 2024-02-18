const express = require('express');
const mysql = require('mysql');

const db  = mysql.createConnection({
    user:"root",
    host:"localhost",
    password: "",
    database: "crud"
});

db.connect((err) =>{
    if(err){
        console.log("database connection error" ,err);
    }
    else{
        console.log("database connection sucessfully ");
    }
});



module.exports = db;