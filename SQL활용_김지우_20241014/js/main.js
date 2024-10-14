
const commentInput = document.querySelector('input');
const submitBtn = document.querySelector('.submit');
const commentsDiv = document.querySelector('.comments');
const date = new Date();
const remove = document.createElement('div');
remove.classList.add('remove');
remove.innerText = "삭제";

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();


const loadComments = () => {
   
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    commentsDiv.innerHTML = '';

    for (let i = 0; i < comments.length; i ++){
        const p = document.createElement('p');
        p.innerHTML = `<h3>${comments [i]} </h3> ${year}년 ${month}월 ${day}일`;
        commentsDiv.append(p);
        // p.append(remove);
    }
}

const addComment = () => {
    const commentText = commentInput.value.trim();
    if (commentText){
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(commentText);
        localStorage.setItem('comments',JSON.stringify(comments));
        commentInput.value = '';
        loadComments();
    }
}

submitBtn.addEventListener('click', addComment);


loadComments();