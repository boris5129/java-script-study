function getUserOfController(username){
    console.log("서버에서 사용자 정보 요청 받음")
    const response = {
        status: 200,
        data: {
            username: username,
            password: "1q2w3e4r!",
            name: "김준일",
            email: "test@gmail.com"
        },
        requestAddress: "192.168.0.109",
        requestHeader: "https-only",
    }
    if(!(username ?? "").trim()){              // ! 는 비었다(공백) (앞에 배움) 유저네임이 공백이 아니면
        return{
            ...response,                //많이들어있지만 밑에꺼만 바꾸고싶을떄 스프레드를 한다. 가져온건 같으니 덮어쓴다.
            status: 400,                //400은 오류라는 뜻
            data: {
                message: "사용자 정보를 확인하세요.",
            }
        }
    }

    return  response;
}

function getUser(username) {
    return new Promise((resolve, reject) => {
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
    console.log(reponseDate);
}).catch(error => {
    console.log(error);
})
console.log("다른 요청2");
console.log("다른 요청3");
console.log("전체 렌더링 종료.");