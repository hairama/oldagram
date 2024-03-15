import { posts } from "/posts.js"
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

const postFeed = document.getElementById("post-holder")
const addPostBtn = document.getElementById("add-post-btn")
const fileInput = document.getElementById("file-input")



addPostBtn.addEventListener("click", function(){
    fileInput.click()
})

document.addEventListener("click", function(e) {
    
    if(e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }
    if(e.target.dataset.comment){
        console.log(e.target.dataset.comment)
    }
    if(e.target.dataset.dm){
        console.log(e.target.dataset.dm)
    }

})

document.addEventListener("dblclick", function(e) {
    if(e.target.dataset.photo) {
        handleLikeClick(e.target.dataset.photo)
        console.log(e.target.dataset.photo)
    }
})

// fileInput.addEventListener('change', function() {
//     // Display the selected file name (optional)
//     const selectedFileName = document.getElementById('selectedFileName');
//     selectedFileName.textContent = this.files[0].name;
    
//     // Here you can perform further actions with the selected file, like uploading it to a server or displaying it on the page
// })

function getFeed(postData) {
    
    const postFeedHTML = []
    postFeedHTML.push(`<div class="floating-header-footer-spacing"></div>`)
    
    postData.map((aSinglePost) => { 
        
        const {name, username, location, avatar, post, comment, likes, uuid, isLiked} = aSinglePost
        
        let likeImgSrc = 'images/icon-heart.png'
        if (isLiked){
            likeImgSrc = "images/icon-heart-red.png"
        }

        postFeedHTML.push(`<div> 
                    <section class="post"> <!-- CONTAINS AN INSTANCE OF A POST -->
                            <div class="post-header"> <!-- CONTAINS THE HEADER OF A POST -->
                                <img class="user-avatar" src="${avatar}"> 
                                <div class="user-info-container">
                                    <p class="bold-text">${name}</p>
                                    <p>${location}</p>
                                 </div>  
                            </div>
                            <img src="${post}" data-photo="${uuid}">
                            <div class="post-footer"> <!-- CONTAINS THE FOOTER OF A POST -->
                                <div class="icon-container">
                                    <img class="icon" data-like="${uuid}" src="${likeImgSrc}" >
                                    <img class="icon" data-comment="${uuid}"  src="images/icon-comment.png">
                                    <img class="icon" data-dm="${uuid}" src="images/icon-dm.png">
                                </div>
                                <p class="bold-text">${likes} likes</p>
                                <div>
                                    <p class="comment"><span class="bold-text">${username}</span> ${comment}</p>
                                </div>
                            </div> <!-- END OF POST-FOOTER -->
                        </section> <!--END OF POST SECTION -->  
                </div>`)  
    }) 

    postFeedHTML.push(`<div class="floating-header-footer-spacing"></div>`)
    postFeed.innerHTML = postFeedHTML.join('')    
}

function handleLikeClick(postID){
    
    posts.forEach(function(post){
        if (post.uuid === postID){
            document.getElementById
            post.isLiked = !post.isLiked
        }
        getFeed(posts)
    })
}        
        
 


getFeed(posts)