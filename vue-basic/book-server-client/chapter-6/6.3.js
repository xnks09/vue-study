/**
 * =========================================
 *    Promise 패턴을 이용한 디비 결과 응답
 * =========================================
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

function userFindById(id){
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM users WHERE id=?`
        db.query(sql, [id], (err, data) => {
            if(err) reject(err)
            resolve(data)
        })
    })
}

app.get('/users', (req, res) => {
    let userId = req.query.id
    userFindById(userId).then((result) => {
        res.json(result)
    }).catch(err => {
        console.log(err)
        res.status(500).json({message: 'error 발생'})
    })
 })
  

// async/awat를 이용하면 아래와 같이 직관적으로 구성 가능
app.get('/users1', async (req, res) => {
    let userId = req.query.id
    try {
        let result = await userFindById(userId)
        res.json(result)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: 'error 발생'})
    }
})



 http.createServer(app).listen(3000, () => {
     console.log('server on : 3000Port')
 })