const list = [
    { 
        id:0,
        profile: "https://cdn.imweb.me/thumbnail/20240228/7b0421c8a7e8a.jpg",
        name: "user 1",
        img: "https://www.visitbusan.net/uploadImgs/files/cntnts/20200101173015809_wufrotr",
    },

    { 
        id:1,
        profile: "https://cdn.imweb.me/thumbnail/20240228/7b0421c8a7e8a.jpg",
        name: "user 2",
        img: "https://www.visitbusan.net/uploadImgs/files/cntnts/20200101173015809_wufrotr",
    },

    { 
        id:2,
        profile: "https://cdn.imweb.me/thumbnail/20240228/7b0421c8a7e8a.jpg",
        name: "user 3",
        img: "https://www.visitbusan.net/uploadImgs/files/cntnts/20200101173015809_wufrotr",
    }
]





const conWrap = document.querySelector('.con_wrap');
// 라이크를 모두 포함하고 있는 부모를 잡아야함. 


for ( let i = 0; i < list.length; i ++){

    const conList = document.createElement('div');
    conList.classList.add('conlist');
    conList.innerHTML = 
    ` <div class = "title">
        <img src = "${list[i].profile}">
        ${list[i].name}      
      </div>
    
      <div class = "bg">
      <img src = "${list[i].img}">
      </div>
      
      <div class = "like">
      <i class="fa-regular fa-heart"></i>
      </div>`
    
    console.log(conList);
    conWrap.append(conList);

}

const clickHandler = (e) => {
    if (
        e.target.classList.contains("fa-regular")
    ){
        e.target.parentNode.innerHTML = `
      <i class="fa-solid fa-heart full-heart"></i>`
       console.log(clickHandler)
    }else if (
        e.target.classList.contains("full-heart")
    ){
        e.target.parentNode.innerHTML = 
        `
      <i class="fa-regular fa-heart"></i>
        
        `
    }
}

conWrap.addEventListener("click", clickHandler);

const Ham = document.querySelector('.menu');

const hamHandler = (e) => {
   if (true) {
    Ham.parentNode.classList.add('active');
   } 
}

    // 새로운ㅇ 클릭핸들러 만들어야함 

Ham.addEventListener("click", hamHandler);


