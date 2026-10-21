console.log(1);
new Promise(() => {         //안에는 함수정의
    console.log(2);
});
console.log(3);
new Promise(() => {
    console.log(4);
});

new Promise((resolve) => {
   console.log(5);
   resolve(6);
}).then(r => console.log(r));

new Promise((resolve) => {
    console.log(7);
    resolve(8);
}).then(r => console.log(r));

new Promise((resolve) => {
    console.log(9);
    resolve(10);        //호출은하되 실행은 값은 덴으로 주고 실행은 덴에서
}).then(r => {
    console.log(r);
    return 11;
});

new Promise((resolve) => {
    console.log(12);
    resolve(13);
}).then(r => console.log(r));

new Promise((resolve) => {
    console.log(14);
    resolve(15);
}).then(r => {
    console.log(r);
    return 16;
});

new Promise((resolve, reject) => {
    console.log(17);
    reject(18);
}).catch(r => {
    console.log(r);
    throw 19;               //catch는 return이 아니라 throw로  reject는 오류라 예외처리이다.
}).catch(r => {
    console.log(r);
    throw 20;
}).catch(r => {
    console.log(r);
    });

