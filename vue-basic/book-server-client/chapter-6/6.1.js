/**
 * ====================================
 *    디비 연동하여 디비 조작 - 조회
 * ====================================
 *
 * RowDataPacket {...}의 형태로 리스트에 담겨있는데 JSON처럼 처리
 * 
 * */ 

 const mysql = require('mysql')

 let db = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'xnks',
    password: 'thffntus1!',
    database: 'studydb'
})
 
 db.query('SELECT * FROM users', (err, data) => {
     if(err) console.log('err 발생 : ' + err)
     else console.log(data);
 })
 
 
 
 //결과를 리스트와 JSON처럼 다룰 수 있음
 db.query('SELECT * FROM users', (err, data) => {
     if(err) console.log('err 발생 : ' + err)
     else {
         data.map(item => {
             console.log(`유저 아이디: ${item.id}, 유저 이름: ${item.name}, 유저나이: ${item.age}`)
         })
     }
 }) 