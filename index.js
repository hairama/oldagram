const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const newPost = document.getElementById("post-holder")
newPost.innerHTML += `<div class="floating-header-space"></div>`

function displayFeed(postData) {
    
    for (let i = 0; i < postData.length; i++) {
        let name = postData[i].name
        let username = postData[i].username
        let location = postData[i].location
        let avatar = postData[i].avatar
        let post = postData[i].post
        let comment = postData[i].comment
        let likes = postData[i].likes 
        let like_id = `id="like${i}"`
    
        newPost.innerHTML += 
        `
        <div> 
            <section class="post"> <!-- CONTAINS AN INSTANCE OF A POST -->
                    <div class="post-header"> <!-- CONTAINS THE HEADER OF A POST -->
                        <img class="user-avatar" src="${avatar}"> 
                        <div class="user-info-container">
                            <p class="bold-text">${name}</p>
                            <p>${location}</p>
                        </div>  
                    </div>
                    <img src="${post}">
                    <div class="post-footer"> <!-- CONTAINS THE FOOTER OF A POST -->
                        <div class="icon-container">
                            <img class="icon" ${like_id} src="images/icon-heart.png">
                            <img class="icon" src="images/icon-comment.png">
                            <img class="icon" src="images/icon-dm.png">
                        </div>
                        <p class="bold-text">${likes} likes</p>
                        <div>
                            <p class="comment"><span class="bold-text">${username}</span> ${comment}</p>
                        </div>
                    </div> <!-- END OF POST-FOOTER -->
                </section> <!--END OF POST SECTION -->  
        </div>
        `
    let liker = document.getElementById(`like${i}`)
    liker.addEventListener("click", function(){
        console.log(likes)
        likes += 1
        console.log("you clicked!")
        console.log(likes)
    })
    }
 
}

displayFeed(posts)

/*
            <section class="post"> <!-- CONTAINS AN INSTANCE OF A POST -->
                <div class="post-header"> <!-- CONTAINS THE HEADER OF A POST -->
                    <img class="user-avatar" src="images/avatar-vangogh.jpg"> 
                    <div class="user-info-container">
                        <p class="bold-text">Vincent van Gogh</p>
                        <p>Zundert, Netherlands</p>
                    </div>  
                </div>
                <img src="images/post-vangogh.jpg">
                <div class="post-footer"> <!-- CONTAINS THE FOOTER OF A POST -->
                    <div class="icon-container">
                        <img class="icon" src="images/icon-heart.png">
                        <img class="icon" src="images/icon-comment.png">
                        <img class="icon" src="images/icon-dm.png">
                    </div>
                    <p class="bold-text">21 likes</p>
                    <div>
                        <p><span class="bold-text">vincey1853</span> just took a few mushrooms lol</p>
                    </div>
                </div> <!-- END OF POST-FOOTER -->
            </section> <!--END OF POST SECTION -->

*/