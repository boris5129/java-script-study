const r1 = true && true;
console.log(r1);

const r2 = 10 && 20;
console.log(r2);
//숫자가 있으면 true 인데 20이 나옴
const r3 = 0 && 20;
console.log(r3);

const r4 = 10 && 0;
console.log(r4);

const r5 = 10 && 20 && 30;
console.log(r5);

const r6 = 10 && 20 && null;
console.log(r6);
//하나라도 null 값이면 null // and 가 전부 true면 마지막 값이 채택 //and라 true가 나와야함
//맨끝까지 true가 되어야 true 그래서 마지막 값이 채택

const r7 = 10 || 20 || 30;
console.log(r7);
//첫 true 값에 의해 결정(or) // 하나라도 true면 true니깐 첫 true에 의해 결정

const data = null;
const r8 = data ?? 20;  // ?? 는 default 느낌
console.log(r8)
// data값을 넣어라 null or undefinded일때만 사용한다  // 잘모르겠다 확인 복습필요