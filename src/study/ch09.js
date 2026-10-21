//함수
function  add(a, b){
    return a + b;       //함수의 기본형
}

console.log(add(10,20));
//anonymous 익명 함수
console.log(function (a, b){
        return a + b;
    })

const add2 = function (a, b){       // 위함수를 add2라고 정의하겠다.
    return a + b;
}
//스크립트에서는 함수를 값으로 본다 자바는X
console.log(add2(30,40));

console.log(function add3(a,b) {return a+b;});
//함수 자체를 값으로 쓴다.

const add4 = function add5(a,b){return a+ b;};      //add5의 함수는 add5 add4 둘다 쓸수있다.
console.log(add4);  // add4안에 add5 함수가 있다.
console.log(add4(100,200));
//함수의 주소값 + () ==> 호출로 볼수있다.

console.log(function (a,b){return a+b}(500, 1000))
//함수를 정의(주소)하고 () 바로 호출해라

//*콜백 함수*
function a1(){
    console.log("a1 함수 호출");
}

function a2(){
    console.log("a2 함수 호출");
}

function b(callbackA){
    callbackA();
    console.log("b 함수 호출")//해석 callbackA에 a1이 들어가면 a1호출 그리고 b의 출력
}
b(a1);          //b가 호출되면서 뒤에 a 호출,
b(a2);

function step1(callback){
    function timeoutCallback(){
        console.log("1단계 완료");
        callback();
    }
    setTimeout(timeoutCallback,2000);
}

function step2(callback){
    function timeoutCallback(){
        console.log("2단계 완료");
        callback();
    }
    setTimeout(timeoutCallback,2000);
}

function step3(callback){
    function timeoutCallback(){
        console.log("3단계 완료");
        callback();
    }
    setTimeout(timeoutCallback,2000);
}
//step3는 callback 받을게 없으니깐 callback삭제
step1(function (){
    step2(function (){
        step3(function (){
            console.log("마지막호출!!")
        })
    })
});

//화살표 함수
function sum(a,b){
    return a + b;
}

const sum2 = function (a, b){       //익명함수
    return a + b;
}

const sum3 = (a,b) => {  //function 단어 대신 화살표사용
    return a + b;
}
//실행명령이 하나면 중괄호를 생략가능하다.
//return 이면 리턴까지 값이아니면 실행만/ 중괄호생략시 리턴도 생략
const sum4 = (a,b) => a + b;
console.log(sum4(10,20));

const sum5 = (a, b) => console.log(a, b);
sum5(20,30);

//매개변수의 갯수가 하나면 ()도 생략가능
const sum6 = a => console.log(a + a);
sum6(100);

setTimeout(() => {console.log("화살표함수 호춯")}, 1000);