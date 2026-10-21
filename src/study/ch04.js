console.log(10 == 10);
console.log(10 == "10");
//자료형이 같으니같다
console.log(10 === 10);
console.log(10 === "10");
// === 자료형까지 비교
console.log(9 !== 9);
console.log(9 !== "9");
//자료형이 다르면 다르다.
console.log(!false);
console.log(!true);
console.log(!0);    // 0을 false로  보기때문에
console.log(!1);    // 1을 true로  보기때문에
console.log(!!0);    
console.log(!!1);    // not의 not(true) 1을 true로  보기때문에
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);     // 4개는 다 false 문자가있으면 true
console.log(!![]);      //빈 배열은 이걸로 확인안되서 true 선언되는순간 값존재.
console.log(!![].length);       //길이는 없으니깐 false
console.log(!!{});      //객체 주소 존재.