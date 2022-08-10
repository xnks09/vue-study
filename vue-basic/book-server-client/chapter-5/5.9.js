/**
 * =============
 *    예외처리
 * =============
 *
 * 
 * 
 * */ 
const fs = require('fs')

const _p = (val) => {
    return new Promise( (resolve, reject) => {

        fs.readFile('./vue-basic/book-server-client/chapter-5/test.txt', (err, data) =>{
            if(err) reject(err)
            reject(`${val} : ${data.toString()}`)
        })
    })
}

async function p(){
    try {
        let data1 = await _p(1)
        let data2 = await _p(2)
        let data3 = await _p(3)
        console.log(data1, data2, data3)
    } catch (err) {
        console.log('err')
        console.log(err)
    }

}

p()


/**
 * [실행결과]
 * 
err
1 : asynchronous 테스트1
asynchronous 테스트2
asynchronous 테스트3
asynchronous 테스트4
 * */




/**
 * async를 이용하여 promise 객체 만들기
 * */

const newMetaPromise = async () => {
    return 'new meta';
};

newMetaPromise().then( res => {
    console.log(res);
})

//await를 이용하여 출력
async function another(){
    try {
        let result = await newMetaPromise();
        console.log(result);
    } catch (error) {
        console.log(error);        
    }
}

another()

/**
 * 아래 코드도 똑같이 동작함
 * */

const newMetaPromise2 = async (v) => {
    return v;
};

async function another2() {
    try {
        let result = await newMetaPromise2(12);
        let result1 = await newMetaPromise2(11);
        let result2 = await newMetaPromise2(13);
        console.log(result);
        console.log(result1);
        console.log(result2);
    } catch (error) {
        console.log(error);
    }
}

another2()

/**
 * Promise의 체이닝을 통해서 구현된 코드를 보면 async와 await의 강력함을 알 수 있음
 * */
const newMetaPromise3 = (v) => {
    return new Promise( (resolve, reject) => {
        resolve(v);
    })
};

newMetaPromise3(12).then(result => {
    console.log(result);
    return newMetaPromise3(11)
}).then( result => {
    console.log(result);
    return newMetaPromise3(13)
}).then( result => {
    console.log(result);
});