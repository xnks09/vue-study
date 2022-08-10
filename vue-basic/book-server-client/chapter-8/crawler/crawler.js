const request = require('request')
const cheerio = require('cheerio')

let url = 'https://pjt3591oo.github.io/';

request(url, (err, res, body) => {
    let $ = cheerio.load(body)
    let posts = $('.wrapper .home .p')

    posts.each((index, item) => {
        let title = $(item).find('a').text()
        let desc = $(item).find('h4').text()

        console.log(title, desc)
    })
})

//request의 다양한 옵션
request({
    uri: url,
    method: "GET",
    timeout: 10000, //설정된 시간동안 응답이 없으면 에러로 간주
    followAllRedirect: true //페이지 새로고침 시 따라갈지 말지를 선택하는 옵션. true를 하면 페이지 새로고침시 따라감
}, (err, res, body) => {
    console.log(res)
})

// POST, PUT, DELETE일 때는 form을 이용하여 데이터 포함 가능
request({
    uri: url,
    method: "GET",
    form: {
        data: "value"
    },
    timeout: 10000, 
    followAllRedirect: true
}, (err, res, body) => {
    console.log(res)
})
