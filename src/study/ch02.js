function main(){
    console.log("메인함수 호출");
  let student = {
      name: "김준일",
      age: 33,
      address: ["부산시",
          "부산진구",
          "부암동",],
      address2:[
          {
              a1: "부산시",
          },
          {
              a2: "부산시",
          },
      ]
  };
  console.log(student);

  let student2;     //얘는 타입이 없다
  console.log(student2);    //java에는 초기화를 안해서 안된다
    let student3 = 10;
    console.log(student3);
    let student4 = new Map();
    console.log(student4);
    let student5 = []
    console.log(student5);
    let student6 = null;
    console.log(student6);
    let student7 = null;
    console.log(typeof student7);       //typeof 자바의 instanceof와 같다 typeof 는 type이 뭡니까?
    //object 타입니다 == 참조자료형이다.
    let student8 = 0/0;
    console.log(typeof student8); // number 숫자자료다
    console.log( student8); // NaN 이뜨지만 number 숫자자료다

    const PI = 3.14;
    //const 는 상수 상수는 다시 대입안된다.(자바의 Final)
}
//let 이건 변수를 이야기함 {}하면 객체 스크립트는 마지막에 ,를 찍는다(카피하기 편하다/안찍어도 문법상 문제는 없다)
//자료형을 명시안하니 리턴타입이 없다
//확인 나는 printf 강사님은 println
//타입리스언어의 컴파일시점에서 일어나는 값이 대입될때 자료형이 정해진다.
//아무것도 대입이 된적없는 변수는 값이 없으니 타입을 선언할수없어서 undefined(타입이정해지지않았다) 즉 단한번도 대입된적이없다.
//메인 없이도 가능 -> 원리는 처음부터 기능읽어서 가능 메인이 밑에있으면 호출된거다 (지금 메인이없으면 호출안됨 내용이 다 메인에 있어서)
main();