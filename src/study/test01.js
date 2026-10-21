//1.단순 콜백 호출하기
// function calculate(a, b, callback) {
//     // TODO: a와 b를 더한 값을 구한 뒤, 그 결과를 callback 함수의 인자로 전달해 실행하세요.
// }
// // 테스트 코드
// calculate(3, 5, function(result) {
//     console.log(`결과는 ${result}입니다`);
// });

function calculate(a, b, callback){
    callback(a+b);
};

calculate(3, 5, function(result) {console.log(`결과는 ${result}입니다`);
});


// 2.조건부 콜백 실행
// function checkAdult(name, age, adultCallback, minorCallback) {
//     // TODO: 나이가 20세 이상이면 adultCallback(name)을, 아니면 minorCallback(name)을 실행하세요.
// }
//
// // 테스트 코드
// checkAdult("철수", 25,
//     function(name) { console.log(${name}님은 성인입니다. 입장이 가능합니다!)},
//     function(name) { console.log(${name}님은 미성년자입니다. 보호자가 필요해요.)}
// );
// function checkAdult(name, age, adultCallback, minorCallback) {
//     if(age >= 20){
//         adultCallback(name);
//     }else{
//     minorCallback(name);
//     }
//              return 을 활용하는방안으로 문제풀어보기
// }
function checkAdult(name, age, adultCallback, minorCallback) {
    if(age < 20) {
        minorCallback(name);
        return;
    }adultCallback(name);

}
checkAdult("철수", 25,
    function(name) { console.log(`${name}님은 성인입니다. 입장이 가능합니다!`)},
    function(name) { console.log(`${name}님은 미성년자입니다. 보호자가 필요해요.`)}
);

// 3. 배열 요소 순회 및 가공 (모방 구현)
// function processArray(arr, callback) {
//     // TODO: 반복문을 사용하여 배열의 각 요소를 순회하며 콜백 함수에 요소를 전달해 실행하세요.
// }
// // 테스트 코드
// processArray([1, 2, 3, 4], function(item) {
//     console.log(item * 2);
// });
function processArray(arr, item) {
        // for (let i = 0; i < arr.length; i++){
        //     item(i+1);
        // }
    for (let  n of arr){
        item(n);
    }
}

processArray([1, 2, 3, 4], function(item) {
    console.log(item * 2);
});

function delayedMessage(message, seconds, callback) {
    // TODO: setTimeout을 사용하여 seconds(초) * 1000 밀리초 뒤에
    // message를 출력하고 콜백 함수를 실행하세요.
    //setTimeout 몇초뒤에 호출을 한다. 1000 이 1초
    console.log(message);
    setTimeout(callback, seconds*1000);
    //비동기 처리 : 선입선출 / 비동기큐에 순서대로 쌓임
    //뒤에 실행된거처럼 보이지만 같이 실행되었음 / setTimeOut은 실행되고 비동기큐에 들어가있다 기존 순서 다 돌고 그 뒤(시간)에 나온다
    //setTimeOut만 시간설정가능 다른건 그냥 뒤에 순서대로 나옴
    console.log("여기 실행!!");
}
// 테스트 코드
delayedMessage("안녕하세요!", 2, function() {
    console.log("콜백 함수가 실행되었습니다!");
});

// function call(num, callback){
//     for (let i = 0; i < num; i++){
//         setTimeout((i+1)*1000);
//     }
//     callback();
// };
// call(10, function(call){
//     console.log();
// });

function call(num){
    console.log(num);
}
for(let i = 0; i < 10; i++){
    console.log(`index: ${i}`);
    setTimeout(function (){call(i+1)}, (i+1)*1000);
}
//다시공부하기 너무어려움 옆 2가지/(`index: ${i}`);/(function (){call(i+1)}, (i+1)*1000)
//원리는 오케이 코드를 짜는거랑 해석이 힘듬
//동기동작 순서대로 동작 비동기 순서를 뒤로 미루는 행위