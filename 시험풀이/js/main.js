const users = [
    {
        id: 0,
        avatarUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD797KzfFQ3V70GGDeqn4TpjmsjvAHqiO38qIFvewvyFP86tV-cXP9vO5gGRfJip3SJH4&usqp=CAU",
        username: "user 1",
        imgUrl: "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
    },

    {
        id: 1,
        avatarUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD797KzfFQ3V70GGDeqn4TpjmsjvAHqiO38qIFvewvyFP86tV-cXP9vO5gGRfJip3SJH4&usqp=CAU",
        username: "user 2",
        imgUrl: "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
    },

    {
        id: 2,
        avatarUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD797KzfFQ3V70GGDeqn4TpjmsjvAHqiO38qIFvewvyFP86tV-cXP9vO5gGRfJip3SJH4&usqp=CAU",
        username: "user 3",
        imgUrl: "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
    },

];

const wrapE1 = document.querySelector('.wrap');
const avatarAll = document.querySelectorAll('.avatar');
const usernameAll = document.querySelectorAll('.username');
const bgAll = document.querySelectorAll('.bg');
const menuE1 = document.querySelector('.menu');
const menuWrapE1 = document.querySelector('.menu_wrap');
let isClicked = true;

for ( let i = 0; i < users.length; i ++){
    avatarAll[i].innerHTML = `<img src = "${users[0].avatarUrl}">`;
    usernameAll[i].innerText = users[0].username;
    bgAll[i].innerHTML = `<img src = "${users[0].imgUrl}">`;
}

const hearthandler = (e) => {
    if (e.target.classList.contains('fa-regular')){
        e.target.parentNode.innerHTML = `<i class="fa-solid fa-heart full_heart"></i>`    
    }else if(e.target.classList.contains('full_heart')){            
        e.target.parentNode.innerHTML = `<i class="fa-regular fa-heart"></i>`
    }
    
}

const menuhandler = () => {
    if (isClicked === true){
        // isClicked라고만 써도 됨 isClicked가 이미 true니까
        menuWrapE1.classList.add('menu_active');
        isClicked = false;
        // isClicked 라는 변수가 false가 됨
    }else if (isClicked === false
        // !isClicked 라고도 쓸 수 있음
    ){
        menuWrapE1.classList.remove('menu_active');
        isClicked = true;
    }
}

wrapE1.addEventListener('click', hearthandler);
menuE1.addEventListener('click', menuhandler);

