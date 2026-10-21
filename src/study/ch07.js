//객체

class Student{
    name;           //스크립트는 자료형 ex) String 안붙임
    age;            //키값만
}

const s1 = new Student();
console.log(s1);        //data가 없으니 undefined

const s2 = {
    name: undefined,        // 스크립트 바로 생성 ket : value 라서 ',' 쓴다.
    age: undefined,
}
console.log(s2);    //class 명이 붙냐 안붙냐 차이

class Teacher{
    name;
    age;

    constructor(name, age) {            //매개변수를 받음, 자료형이 없다 생성자를 class명하지않고 constructor 쓴다.
        this.name = name;
        this.age = age;
    }
}

const t1 = new Teacher("김준일", 33);
console.log(t1.name);       //캡슐화 getter 이런것들 안씀    / '.'찍고는 변수못씀 name자체가 key값

const t2 = {                //바로넣을때는 new 안해도된다 의미없다
    name: "김준일",
    age:33,
};
console.log(t2);

//참조 방법
console.log(t2["name"]); // []는 배열이지만 참조할때 쓸수있다.
const key = "name";
console.log(t2[key]);  // 변수를 쓸수있다. Map 의 get 함수와 동일하다
//console.log(t2.key);  // 이건 필드안에 key가 잇어야한다(위에 변수 선언할때)
t2["address"] = "부산 부산진구";
console.log(t2);

const t3 = {
      ...t2,        //스프레드 카피해서 가져와라라는뜻
    gender: "남",
};
console.log(t3);