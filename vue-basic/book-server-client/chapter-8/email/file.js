/**
 * ============================
 *   첨부파일 포함 메일 보내기
 * ============================
 *
 * 
 * */ 

const fs = require('fs')
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: '9.miho.noreply@gmail.com',
        pass: 'uqdtgvtccddqjrpy'
    },
    host: 'smtp.gmail.com',
    port: '587'
})

fs.readFile('./vue-basic/book-server-client/chapter-3/test.txt', function(err, data){

    let mailOptions = {
        from: '9.miho.noreply@gmail.com',
        to: 'xnks@naver.com',
        subject: '이메일 테스트',
        text: 'Hello!!',
        //html형태로 전달할 경우
        //html: '<h1>hello world</h1>',
        attachments: [{'filename': 'text.txt', 'content': data}]
    }

    transporter.sendMail(mailOptions, (err, info) => {
        transporter.close()
    
        if(err){
            console.log(err)
        }
    
        console.log(info)
    })
    
})



