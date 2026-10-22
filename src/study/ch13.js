// async / await

function getUser(id) {
    return new Promise((resolve, reject) => {       //resolve, reject 매개변수명이라 딴거 써도 됨
        const users = [
            { id: 1, username: "user1"},
            { id: 2, username: "user2"},
            { id: 3, username: "user3"},
        ];
        const foundUser = users.find(user => user.id === id);     //id userid 같으면 user하나를 찾아줌 find 함수(반복돌려서 조건이 참이면)
        if(!foundUser){        //못찾으면 undifinded 이때 true     // 1개만찾음 ,여러개할거면 filter(나중에함)로 배열로 묶어서 꺼냄 map은 치환
            reject(new Error("id와 일치하는 사용가자 ㄱ존재하지 않습니다."));
            return;         //밑으로 넘어가면안되니 return걸어줘야함
        }
        resolve(foundUser);  //reject가 안걸리면 찾았다.
    });
}

function getPostsByUsername(username) {
    return new Promise((resolve, reject) => {
        const posts = [
            {id: 1, content: "내용1", username: "user1"},
            {id: 2, content: "내용2", username: "user2"},
            {id: 3, content: "내용3", username: "user1"},
            {id: 4, content: "내용4", username: "user2"},
            {id: 5, content: "내용5", username: "user1"},
        ];
        const foundPosts = posts.filter(post => post.username === username);        //조건참인거 반복돌면서 가져온다 여러개 다
        if(!foundPosts.length){     //아무것도 못찾았다  ! 떄문에
            reject(new Error("해당 username으로 검색된 게시글이 없습니다."));
            return;
        }
        resolve(foundPosts);
    })
}

let username = null;
// getUser(1).
// then(foundUser => {
//     username = foundUser.username;      //2번 유저네임을 null자리에 넣어라
//     })
//     .catch(console.error());
//
// getPostsByUsername(username)    //비동기다보니 위 덴보다 얘기먼저 동작해서 null이된다.
//     .then(foundPosts => {
//     console.log(foundPosts);
// })
//     .catch(console.error);

getUser(1).             //덴안에 있어야 정상코드
then(foundUser => {
    username = foundUser.username;      //2번 유저네임을 null자리에 넣어라
    getPostsByUsername(username)   //정상전달 찾아올거다
        .then(foundPosts => {
            console.log(foundPosts);
})
    .catch(console.error);
    })
    .catch(console.error);





// getUser(1).then(foundUser => {
//     getPostsByUsername(foundUser.username).then(foundPosts => {
//         console.log(foundPosts);
//     }).catch(console.error());
// }).catch(console.error); // error로 출력
//복습하기