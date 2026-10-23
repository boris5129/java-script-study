async function getRequest() {
    //fetch는 요청을 날리는 메서드
   try {
       const response = await fetch("http://localhost:8080/servlet_study_war_exploded/first");
       const responseData = await response.text();  //response.text() 응답데이터
       console.log(responseData);

   }    catch (error){
       console.log(error);
   }
}
//자바스크립트로 자바서버에 요청날렸다  출력창에 응답데이터는 자바에서 만든거
getRequest();

function getRequest2(){
    fetch("http://localhost:8080/servlet_study_war_exploded/first")
        .then(response => {
            response.text()                 //이거 복습 이해가안된 위랑 같다는데 하나하나 뜯기
                //text의 리턴이 프로미스니깐 프로미스로 나온다 그래서 덴해서 안의 값자체를 가져와야한다.
                .then(responseData => {
                    console.log(responseData);
                })
        })
}

getRequest2();