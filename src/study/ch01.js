console.log("출력!!");
console.log("출력!!");
console.log(0/0);
console.log("출력!!");
//한줄 한줄 그때그때 실행된다.
//자바는 전체번역후 실행 스크립트는 번역해석번역해석

let name = "김준일";
console.log(name);
name = 123;
console.log(name);
//type less 언어 자료형이 없어 자유도가 높다

console.log([1,2,3,4,5,6,7]);
name = [1,2,3,4,5,6,7];
console.log(name);
name ={         //Map과 형태가 동일하다
    "a": [1,2,3,4],
    "b": "김준일",
    "c": 1234
};
console.log(name);
console.log(name["b"]);
console.log(name.c);
// ;(세미콜론) 안찍어도 되는데 코드 구분을 위해 찍는다.

let data = [
    {
        class1: {
            student1:{
                id: 1,
                object:{
                    name:"김준일",
                    address: "서울"
                },
                createdAt: new Date("2025-10-19")
            },
            student2:{
                id: 2,
                object:{
                    name:"김준이",
                    address: "서울"
                },
                createdAt: new Date("2025-10-20")
            }
        }
    },
    {
    class2: {
    student1:{
        id: 1,
            object:{
            name:"김준일",
                address: "부산"
        },
        createdAt: new Date("2025-10-19")
    },
    student2:{
        id: 2,
            object:{
            name:"김준이",
                address: "부산"
        },
        createdAt: new Date("2025-10-20")
        }
    }
    }
]

console.log(data);
console.log(JSON.stringify(data));
//key값 문자열로 안쓰고 그냥 저렇게 쓰면된다
//중괄호 하나가 Map
console.log(data[1].class2.student1.object.name);
//인덱스로 map의 주소를 찾아간다  그후 찾는다.
//ex 현재는 class2 한개밖인데 만약 1번 index에 class 3이있으면 1번 인덱스안의 class2를 찾아간다
//전체를 object(객체)로 본다