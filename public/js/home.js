// -------------buttons on the page -------------
const titleBtn = document.querySelectorAll(".postTitle");
const commentBtn = document.querySelector(".newCommentBtn");

// -------------items on the page ----------------
const postArea = document.querySelector(".postArea");
let textbox;

const showComments = () => { // adds textbox to first post only change that later
    var newComment = document.createElement("section");
    var newCommentText = document.createElement("textarea");
    var newCommentBtn = document.createElement("button");

    newCommentBtn.addEventListener("click", submitComment)

    newComment.className = "newComment";
    newCommentText.className = "newCommentText";
    newCommentBtn.className = "newCommentBtn";

    newCommentBtn.textContent = "Submit";

    newComment.appendChild(newCommentText);
    newComment.appendChild(newCommentBtn);
    postArea.appendChild(newComment);

    var comments = document.createElement("section");
    var commentHead = document.createElement("div");
    var commentUser = document.createElement("p");
    var commentContent =document.createElement("p");

    comments.className = "comments";
    commentHead.className = "commentHead";
    commentUser.className = "commentUser";
    commentContent.className = "commentContent";

    commentUser.textContent = "test";
    commentContent.textContent = "test text";

    comments.appendChild(commentHead);
    commentHead.appendChild(commentUser);
    comments.appendChild(commentContent);
    postArea.appendChild(comments);

    // commentBtn.addEventListener("click", submitComment)
}

const submitComment = () => {
    textbox = document.querySelector(".newCommentText");
    // fetch(window.location.href, {
    //     method: 'POST',
    //     headers: {"Content-Type": "application/json"},
    //     body
    // })
    console.log(textbox.value)
    // console.log("working")
}

for(i of titleBtn){
    i.addEventListener("click", showComments)
}

