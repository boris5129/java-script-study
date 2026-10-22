function getUserOfController(username){
    console.log("서버에서 사용자 정보 요청 받음")
    const response = {
        status: 200,                //http에서 200은 성공
        data: {
            username: username,
            password: "1q2w3e4r!",
            name: "김준일",
            email: "test@gmail.com"
        },
        requestAddress: "192.168.0.109",
        requestHeader: "https-only",
    }
    if(!(username ?? "").trim()){              // ! 는 비었다(공백 un이나 null이면) (앞에 배움) 유저네임이 공백이 아니면
        return{                         //새로운 객체를 넣겠따
            ...response,                //많이들어있지만 밑에꺼만 바꾸고싶을떄 스프레드를 한다. 가져온건 같으니 덮어쓴다.
            status: 400,                //http에서 400은 오류라는 뜻
            data: {
                message: "사용자 정보를 확인하세요.",
            }
        }
    }

    return  response;
}

function getUser(username) {
    return new Promise((resolve, reject) => {       //실제 리턴은 프로미스객체  // => 대신 앞에 function가능
        console.log("서버로 사용자 정보 요청");
        const response = getUserOfController(username)
        if(response.status != 200){
            reject(response.data);
            return;
        }
        resolve(response.data);
    });
}

console.log("전체 렌더링 시작.");
getUser("test-user").then(reponseDate => {     //호출됐을때 Promis가 일어난다.
    console.log(reponseDate);       //resolve는 then reject는 catch
}).catch(error => {
    console.log(error);
})
console.log("다른 요청2");
console.log("다른 요청3");
console.log("전체 렌더링 종료.");

//hoisting 공부하기  - var (varyable) 쫙먼저 실행한다? function정의는 제일위로가서 순서바뀌어도 된다.
//hoisting 선언과 초기화 구분해서 본다 선언과 정의는 위로 초기화는 밑에있으면 나중에 실행
//let은 hoisting이 안됨
//var의 문제는 재선언이 가능함 잘안씀 변수에는 hoisting 쓰지마라 function만 써라
//함수는 바뀌면 안되니깐 상수인 const = hoisting 안됨(대입한 정의는 안됨) 정의는 hosting 되지만 호출할 변수명이없으니 안된다고 생각
console.log(name);  // undefinded
var name = "관우";    // 선언은 위로가서 un은 나옴
console.log(name); //관우 나옴