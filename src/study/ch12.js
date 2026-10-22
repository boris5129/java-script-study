console.log('1');
setTimeout(function (){     //function 뺴고 () 뒤에 => 가능
    console.log('2');
}, 1000);
printImmediately(() => console.log('hello'));
//이게 콜백 printImmediately를 출력하면 안에잇는 print가 출력
printWithDelay(() => console.log('async callback'), 2000);
//함수전달 시간전달

function printImmediately(print){
    print();
};

function  printWithDelay(print, timeout){
    setTimeout(print, timeout);
}

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'ellie'){
                onSuccess({ name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);           //이 검사를 1초뒤에해라
    }
}

const userStorage = new UserStorage();
const id = 'ellie';
const password = 'dream';
userStorage.loginUser(
    id,                     //userStorage 매개변수 4개 값2개 인자2개
    password,
    user => {       //onsuccess
        userStorage.getRoles(       //id값 전달 받음, 그리고 getRoles호출
            user,
            userWithRole => {       //onSuccess 객체들어옴
                console.log('Hello ${user.name}, you have a ${user.role} role');
            },
            error => {
                console.log(error);
            },
        );
    },
    error => {      //onError  'not found'를 받는다.
        console.log(error);
    }
);
//콜백 = 함수의매개변수로 함수를 전달한다.

// producer = promise를 제공
//새로운 promise가 만들어질때는 전달한 콜백함수가 바로 자동실행
const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');       // 주석처리시 에러
        reject(new Error('no network'));
    }, 2000);
});

// consumers: then, catch, finally 로 promis를 받는다.
promise.then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {        //성공 실패와 상관없이 무조건 호출되는
    console.log('finally');
});

// promise chaining
const  fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)           //덴 캐치는 호추랗면 프로미스를 리턴
.then(num => num * 3)           //덴은 값을 바로전달해도되고 프로미스를 전달해도된다.
.then(num => {
    return new Promise((resolve, reject) => {           //promise를 리턴  리턴을 주기위해 프로미스가져옴
        setTimeout(() => resolve(num - 1), 1000);       //중간지연
    });
})
.then(num => console.log(num)); //여기 num은 promise       덴이 프로미스를 받을떄 무조건 resolve의 값이 전달(프로미스풀어서)

//Error Handing

const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen()
.then(hen => getEgg(hen))
.then(cook)     //받을떄 한가지만 받으면 생략가능
.then(meal => console.log(meal))
.catch(console.log);    //받을떄 한가지만 받으면 생략가능