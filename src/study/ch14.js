// async / await
//CH 13 ,14 같다 async 쓴거랑 안쓴거 공부하기
async function getUserById(id) {            //async넣으면서 promise 삭제
    const users = [
        { id: 1, username: "username1"},
        { id: 2, username: "username2"},
        { id: 3, username: "username3"},
    ];
    const foundUser = users.find(user => user.id === id);
    if(!foundUser){
        throw new Error("id와 일치하는 사용자가 존재하지 않습니다.");       //reject 는 throw로
    }
    return foundUser;     //resolve은 return으로
}

async function getPostsByUsername(username) {
    const posts = [
        {id: 1, content: "내용1", username: "username1"},
        {id: 2, content: "내용2", username: "username2"},
        {id: 3, content: "내용3", username: "username1"},
        {id: 4, content: "내용4", username: "username2"},
        {id: 5, content: "내용5", username: "username1"},
    ];
    const foundPosts = posts.filter(post => post.username === username);
    if(!foundPosts.length){
        throw new Error("해당 username으로 검색된 게시글이 없습니다.");
    }
    return foundPosts;
}
function asyncFx2(){
    return new Promise((resolve, reject) => {
    });
}

async function asyncFx(){
}

//async function 은 무조건 프로미스를 리턴하는 함수  asyncFxf랑 asyncFx2 같다.

async function run() {
    // async function 에 프로미스앞에서만 await 가능(다른비동기(ex>settimeout)나 async function아니면 못쓴다.
    try{
        let value = await new Promise((resolve, reject) => {    //비동기끼리 동기동작을위해 await 원랜 덴에서 받음
            resolve(100);   //reject 터지면 error로 간다 마지막 캐치
        });
        console.log(value);         //resolve에 값을 바로 리턴해준다      바로 큐에서 꺼내왔다
        let foundUser = await getUserById(1);       //await은 프로미스 객체 앞에만 붙을수있다. 비동기라고 할수있는게 아님.
        //id 3일경우 현재코드에서 예외.
        console.log(await getPostsByUsername(foundUser.username));      //프로미스에 값을가져온다
    } catch (error){            //reject 터치는곳
        console.error(error);
    }
}

run();