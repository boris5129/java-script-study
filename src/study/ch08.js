/*
    const students = [
    {
        name: "김준일"
        age: 33,
     },
     {
        name: "김준이"
        age: 34,
     },
]

const domStudents = [
     "<div>
          <div>이름: 김준일</div>
          <div>나이: 33</div>
     </div>",
     "<div>
          <div>이름: 김준이</div>
          <div>나이: 34</div>
     </div>",

]
 */

const students = [
    {
        name: "김준일",
        age: 33,
    },
    {
        name: "김준이",
        age: 34,
    },
]
let students1 = [
    {
        name: "김준일",
        age: 33,
    },
    {
        name: "김준이",
        age: 34,
    },
]
students1 = [
    ...students1,
    {
        name: "김준삼",
        age: 35,
    },
]


function mapFx(data){           //함수명이 변수명이다
    return `
          <div>
            <div>이름: ${data.name}</div>
            <div>나이: ${data.age}</div>
          </div>
    `
}

const domStudents = students.map(mapFx);        //배열안에 내장된 함수 (student) 배열 객체안에 콜백함수 map쓰면 완전새로운 배열
//기존배열은 그대로 복사해서 넣는다
//반복문 문자열을 만들어서 리턴해서 새로운 배열에 하나 카피해서넣는다 //복습필요
console.log(domStudents);       //?? 복습필요