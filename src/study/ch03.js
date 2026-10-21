//alt + f12
import readlineSync from "readline-sync";

let score = 85;

if(score > 89){
    console.log("A");
} else if(score > 79){
    console.log("B");
} else if (score > 69){
    console.log("C");
}else if (score > 59){
    console.log("D");
}else {
    console.log("F");
}
console.log(Math.floor(score/10));
//실수 정수 구분 안함
//floor 절삭 소수점자리 버림

switch (Math.floor(score/10)){
    case 10:
    case 9:
        console.log("A");
        break;
    case 8:
        console.log("B");
        break;
    case 7:
        console.log("C");
        break;
    case 6:
        console.log("D");
        break;
    default:
        console.log("F");
}
//ex>8.5 가 나오면 .5가 없으니깐 절삭
//10에 break 없는거 문이 9에 닫히면 10 , 9 찍힘 그래서 10에 안넣어도 9꺼가 찍힘

while(true){
    const input = readlineSync.question(decodeURI("input: "));

    if(input === "q"){
        break;
    } else if (input === "a1"){
        console.log("a1을 선택");
    }else if (input === "a2"){
        console.log("a2을 선택");
    }else {
        console.log("다시입력");
    }

    console.log(input);
}

for (let i = 0; i < 10; i++){
    console.log(i);
}