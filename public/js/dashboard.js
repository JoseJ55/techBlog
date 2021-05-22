
const addPostsBtn = document.querySelector('.addPostsBtn');

const body = document.querySelector('body')

const postAdd = () => {
    var addPostData = document.createElement('section');
    var addPostHead = document.createElement('div');
    var addPostHeadP = document.createElement('p');
    var addPostTitleP = document.createElement('p');
    var addPostTitle = document.createElement('addPostTitle');
    var addPostTextP = document.createElement('p');
    var addPostText = document.createElement('addPostText')
    var addPostBtn = document.createElement('button');

    addPostData.className = "addPostData";
    addPostHead.className = "addPostHead";
    // addPostHeadP.className = "addPostHeadP";
    addPostTitleP.className ="addPostTitleP";
    addPostTitle.className = "addPostTitle";
    addPostTextP.className = "addPostTextP";
    addPostText.className = "addPostText";
    addPostBtn.className = "addPostBtn";

    // add values to new elements

    addPostData.appendChild(addPostHead);
    addPostHead.appendChild(addPostHeadP);
    addPostData.appendChild(addPostTitleP);
    addPostData.appendChild(addPostTitle);
    addPostData.appendChild(addPostTextP);
    addPostData.appendChild(addPostText);
    addPostData.appendChild(addPostBtn);
    body.appendChild(addPostData)


    console.log("working")
}

addPostsBtn.addEventListener("click", postAdd);