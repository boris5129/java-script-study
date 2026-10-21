//배열
let arr1 = new Array();
let arr2 = [];      //둘다 가능

arr1[0] = 10;
arr1[1] = 20;
arr1[2] = 30;
arr1.push(40);

arr2[0] = 10;
arr2[1] = 20;
arr2[2] = 30;
arr2.push(40);              //push하면 넣는데 끝에 추가. 메서드로도 추가가능하다

arr2 = [...arr2, 50];       //스프레드 라고함. '...' 기존의 안에든 요소만 통으로 복제
console.log(arr1, arr2);
arr2 = [arr2, 50];       //이러면 배열안에 배열이 들어감
console.log(arr1, arr2);        //,(쉼표)직으면 자동 띄어쓰기

// arr2 = [...arr2,...arr2, 50];       // 위에꺼 겹치니 주석처리해야함
// console.log(arr1, arr2);

let result = [];
//스프레드를 사용하여 for 돌고 1~100까지 들어가게
for(let i = 0; i < 100; i++){
    result = [...result, i+1];
}
console.log(result);