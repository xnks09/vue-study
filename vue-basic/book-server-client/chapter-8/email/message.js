/**
 * =========================
 *   텍스트 형태 메일 보내기
 * =========================
 *
 * 
 * */ 

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

let mailOptions = {
    from: '9.miho.noreply@gmail.com',
    to: 'xnks@naver.com',
    subject: '이메일 테스트',
    text: 'Hello!!'
}

transporter.sendMail(mailOptions, (err, info) => {
    transporter.close()

    if(err){
        console.log(err)
    }

    console.log(info)
})