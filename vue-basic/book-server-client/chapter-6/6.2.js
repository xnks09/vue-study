/**
 * ==================
 *    디비 결과 응답
 * ==================
 *
 * 
 * */ 
 const http = require('http')
 const express = require('express')
 const mysql = require('mysql')
 
 let app = express();
 
 let db = mysql.createConnection({
     host: '127.0.0.1',
     port: '3306',
     user: 'xnks',
     password: 'thffntus1!',
     database: 'studydb'
 })
 
 app.get('/users', (req, res) => {
     let sql = 'SELECT * FROM users'
     db.query(sql, (err, data) => {
         res.json(data)
     })
 })
 
 app.get('/boards', (req, res) => {
     let sql = 'SELECT * FROM boards'
     db.query(sql, (err, data) => {
         res.json(data)
     })
 })
 
 http.createServer(app).listen(3000, () => {
     console.log('server on : 3000Port')
 })