//비동기 동작을 위함 promise

console.log(1);
console.log(2);
console.log(3);
setTimeout(() => console.log(4),1000);
console.log(5);
//Promise 처음매개변수 resolve(함수) 두번쨰매개변수 reject를받는다 얘들도 콜백함수이다.
const p1 = new Promise((resolve, reject) => {      //프로미스함수 생성하면서 콜백함수 호출
    console.log("프로미스 생성");             //프로미스함수안에 콜백함수가 호출되게 생성된다.
    resolve(10);      //리저브를 호출한다.
});
//resolve  than을 호출한다.
p1.then((result) => {       //than에는 콜백함수가 들어있다.
    console.log(result);    //10이있네
    return  30;             //있으면 return
}).then((result)=>{         //30을 등록 큐에
    console.log(result);
});

const p2 = new Promise((resolve, reject) => {
    console.log("프로미스 생성2");
    resolve(20);
});
//promis 생성호출하고나서 resolve(성공했따) 값을 들고만있다 than나오면 주겠다
p2.then((result) => {
    console.log(result);
    return  40;
}).then((result)=>{
    console.log(result);
});
//콜백지원을 만들면 비동기를가지고 동기를 만들수있다.

new Promise((resolve, reject) => {
    resolve("1단계");               //프로미스
    }).then((result => {                //than안에 프로미스하나 더 집어 넣은거
        console.log(result);

        new Promise((resolve, reject) => {
            resolve("2단계");
        }).then((result) => {

            console.log(result);
        })
}))