import { posts } from "/posts.js"
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

const postFeed = document.getElementById("post-holder")
const addPostBtn = document.getElementById("add-post-btn")
const fileInput = document.getElementById("file-input")
const overlay = document.getElementById('overlay')



addPostBtn.addEventListener("click", function(){
    fileInput.click()
})

document.addEventListener("click", function(e) {
    
    if(e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }
    if(e.target.dataset.commentBtn){
        console.log(e.target.dataset.commentBtn)
    }
    if(e.target.dataset.dm){
        console.log(e.target.dataset.dm)
    }
    if(e.target.dataset.viewPostComments) {
        openCommentModal(e.target.dataset.viewPostComments)
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
        
        const {name, username, location, avatar, post, postText, likes, replies, uuid, isLiked} = aSinglePost
        
        let likeImgSrc = 'images/icon-heart.png'
            if (isLiked){
                likeImgSrc = "images/icon-heart-red.png"
            }

        let repliesPreviewHtml = ''
            if (replies.length > 1) {
                repliesPreviewHtml = `View all ${replies.length} comments`
            } else if (replies.length === 1) {
                repliesPreviewHtml = `View 1 comment`
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
                                    <img class="icon" data-comment-btn="${uuid}"  src="images/icon-comment.png">
                                    <img class="icon" data-dm="${uuid}" src="images/icon-dm.png">
                                </div>
                                <p class="bold-text like-count">${likes} likes</p>
                                <div>
                                    <p class="post-text"><span class="bold-text">${username}</span> ${postText}</p>
                                    <div id="reply-preview"-${uuid}" class="reply-preview">
                                        <p data-view-post-comments="${uuid}">${repliesPreviewHtml}</p>
                                    </div>
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
        
function openCommentModal(postID){
    document.getElementById("comments-modal").style.display = "flex"
    
    document.getElementById("comments-modal-close-btn").addEventListener("click", function(){
        document.getElementById("comments-modal").style.display = "none"
        document.body.style.overflow = ''
        overlay.style.display = 'none'
    })

    document.body.style.overflow = 'hidden'
    overlay.style.display = 'block'

    
    
    let commentModalHTML = []
        
        posts.forEach(function(post) {
            if (post.uuid === postID) {
                
                commentModalHTML = post.replies.map(function(reply) {
        
                    return  `
                                <div class="post-reply">
                                <div class="reply-inner">
                                    <!-- <img src="${reply.profilePic}" class="profile-pic"> -->
                                        <div>
                                            <p class="handle">${reply.handle}</p>
                                            <p class="reply-text">${reply.replyText}</p>
                                        </div>
                                    </div>
                            </div>
                            `  
                }).join('')
            }
        
        // `
        // <div class="reply-inner">
        //     <p>${reply.replyText}</p>
        // </div>` 

    document.getElementById("comments-modal-inner").innerHTML = commentModalHTML
    })

    
    /*
        locate the post with postID in the posts array
        iterate through the replies array and generate html to render the comment modal
        unhide the comment modal
        
        on the comment modal
        display a list of comments
        user can scroll through comments
        
        user can add a comment
        user can close the modal
    */
}       


getFeed(posts)