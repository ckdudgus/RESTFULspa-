var express = require('express');
var awsRds = express.Router();

var mysql = require('mysql');
var dbconfig = require('../db/config');


var pool = mysql.createPool(dbconfig); 

awsRds.use(express.urlencoded({ extended : true }))


awsRds.get('/' , (req , res) => {
    connection.query('SELECT * FROM contact' , (error,result) =>{
        if(error)throw error;
        console.log('DB내용 :',result)
        res.send(result);
    })
});


module.exports = awsRds;