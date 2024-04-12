export const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        postText: "just took a few mushrooms lol",
        likes: 21,
        uuid: "5135c61d-7e4e-40de-b9f5-170ed23989c4",
        replies: [
            {
                handle: `gus1819`,
                profilePic: `images/avatar-courbet.jpg`,
                replyText: `@vincey1853 Why didn't you tell me?!? 🍄😂`,
                },
            {
                handle: `jd1735`,
                profilePic: `images/avatar-ducreux.jpg`,
                replyText: `@gus1819 b/c everyone knows you're a cop!`,
            }
        ],
        isLiked: false
        
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        postText: "i'm feelin a bit stressed tbh",
        likes: 4,
        uuid: "af9019ee-4ed5-4a6e-89c2-a3d478b62179",
        replies: [
            {
                handle: `vincey1853`,
                profilePic: `images/avatar-vangogh.jpg`,
                replyText: `Hey, Gustave! Remember to take a breather and appreciate the beauty around you! Maybe go for a walk in nature? 🌿`,
                },
                {
                handle: `jd1735`,
                profilePic: `images/avatar-ducreux.jpg`,
                replyText: `@gus1819 Hang in there, buddy! Maybe a glass of wine and some good company will help ease the stress! 🍷😊`,
                },
                {
                handle: `PermaBorg`,
                profilePic: `images/avatar-borgen.png`,
                replyText: `@gus1819 Stress is no joke, but remember, you're stronger than you think! Take a moment for yourself and do something you love. 💪😊`,
                }
        ],
        isLiked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        postText: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        uuid: "22720426-9819-4874-8b77-92c0b732b150",
        replies: [
            {
                handle: `vincey1853`,
                profilePic: `images/avatar-vangogh.jpg`,
                replyText: `Good morning, Joseph! I'm more into stacking up brushes than coins, but wishing you all the best with your investments! 💰✨`,
                },
                {
                handle: `gus1819`,
                profilePic: `images/avatar-courbet.jpg`,
                replyText: `@jd1735 Yo, Ducreux! Still sticking with the classics like gold or diving into the world of crypto? Either way, WAGMI! 🚀💸`,
                }
        ],
        isLiked: false
    },
        {
        name: "Per Borgen",
        username: "PermaBorg",
        location: "Olso, Norway",
        avatar: "images/avatar-borgen.png",
        post: "images/post-borgen.jpg",
        postText: `Ever notice how ppl who say "AI will take our jobs" only have 1 string on their fiddle and no skin? Ignore them!`,
        likes: 2001,
        uuid: "a2909207-c30a-4dc3-aec4-87ef06ce6d55",
        replies: [
            {
                handle: `gus1819`,
                profilePic: `images/avatar-courbet.jpg`,
                replyText: `@PermaBorg True that! No machine can replicate the soul and passion we put into our art. Keep creating, my friend! 🎨🔥`,
                },
                {
                handle: `jd1735`,
                profilePic: `images/avatar-ducreux.jpg`,
                replyText: `@PermaBorg Agreed! The human touch is irreplaceable. Plus, can AI capture the essence of a moment like we can? Doubt it! 🤔🎭`,
                },
                {
                handle: `vincey1853`,
                profilePic: `images/avatar-vangogh.jpg`,
                replyText: `@PermaBorg While AI might have its uses, nothing beats the uniqueness and emotion we bring to our work. Keep inspiring us, Per! ✨🖌️`,
                },
                {
                handle: `PermaBorg`,
                profilePic: `images/avatar-borgen.png`,
                replyText: `@gus1819 @jd1735 @vincey1853 You guys are absolutely right! We're artists, not algorithms. Let's keep pushing boundaries and proving them wrong! 💪🎨`,
                }
        ],
        isLiked: false
    },
        {
        name: "Frida Kahlo",
        username: "FridaLaCasaAzul",
        location: "Coyoacán, Mexico",
        avatar: "images/avatar-kahlo.jpg",
        post: "images/post-kahlo.jpg",
        postText: `My post carries with it the message of pain`,
        likes: 1,
        uuid: "a2909207-c30a-4dc3-aec4-87ef06ce6d55",
        replies: [
            {
                handle: `gus1819`,
                profilePic: `images/avatar-courbet.jpg`,
                replyText: `@FridaLaCasaAzul Your art speaks volumes, Frida. Your ability to convey raw emotion is unparalleled. Keep sharing your truth! 🎨🖤`,
                },
                {
                handle: `jd1735`,
                profilePic: `images/avatar-ducreux.jpg`,
                replyText: `@FridaLaCasaAzul Your work touches the soul, Frida. It's a testament to your strength and resilience. Keep shining your light! 💪🌺`,
                }
        ],
        isLiked: false
    }    
]