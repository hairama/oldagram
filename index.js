// IMPORT
import { posts } from "/posts.js"
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

// ELEMENTS
const postFeed = document.getElementById("post-holder")
const addPostBtn = document.getElementById("add-post-btn")
const fileInput = document.getElementById("file-input")
const overlay = document.getElementById("overlay")
const commentsModal = document.getElementById("comments-modal")


// EVENT LISTENERS
document.addEventListener("click", function(e) {  
    if(e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }
    if(e.target.dataset.commentBtn){
        openCommentModal(e.target.dataset.commentBtn)
    }
    if(e.target.dataset.viewPostComments) {
        openCommentModal(e.target.dataset.viewPostComments)
    }
    if(e.target.dataset.dm){
        // might add functionality here later
    }
    if(e.target.dataset.closeCommentsModal || e.target.dataset.overlay) {
        closeCommentModal()
    }
    if(e.target.dataset.addPostBtn) {
        fileInput.click()
        // will add image upload functionality here later
    }
})

document.addEventListener("dblclick", function(e) {
    if(e.target.dataset.photo) {
        handleLikeClick(e.target.dataset.photo)
    }
    if(e.target.dataset.darkMode)
    document.body.classList.toggle("dark-mode")
})

// FUNCTIONS
function renderFeed() {
    const postFeedHTML = []
    
    postFeedHTML.push(`<div class="floating-header-footer-spacing"></div>`)
    
    posts.map((aSinglePost) => { 
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


        postFeedHTML.push(`
                <div> 
                    <section class="post"> <!-- CONTAINS AN INSTANCE OF A POST -->
                            <div class="post-header"> <!-- CONTAINS THE HEADER OF A POST -->
                                <img class="user-avatar" src="${avatar}"> 
                                <div>
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
            //add or remove likes
            post.isLiked ? post.likes -- : post.likes ++;
            //toggle isLiked status
            post.isLiked = !post.isLiked
        }
        renderFeed(posts)
    })
}        
        
function openCommentModal(postID){
    commentsModal.style.display = "flex"
    document.body.style.overflow = 'hidden'
    overlay.style.display = 'block'  
    renderComments(postID)  
}       

function renderComments(postID) {
    let commentModalHTML = []

    posts.forEach(function(post) {
        if (post.uuid === postID) {
            
            commentModalHTML = post.replies.map(function(reply) {
    
                return  `
                            <div class="post-reply">
                            <div class="reply-inner">
                                <img src="${reply.profilePic}" class="user-avatar">
                                    <div class="handle-and-comment-container">
                                        <p class="bold-text">${reply.handle}</p>
                                        <p class="reply-text">${reply.replyText}</p>
                                    </div>
                                </div>
                        </div>
                        `  
            }).join('')
        }
    })
    document.getElementById("comments-modal-inner").innerHTML = commentModalHTML
}

function closeCommentModal() {
    commentsModal.style.display = "none"
    document.body.style.overflow = ''
    overlay.style.display = 'none'
}

renderFeed()