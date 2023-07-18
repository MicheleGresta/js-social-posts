const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=10"
        },
        likes: 120,
        created: "2021-09-03"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        created: "2021-05-15"
    },
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=24",
        author: {
            name: "Luca Formicola",
            image: null
        },
        likes: 56,
        created: "2021-04-03"
    },
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 95,
        created: "2021-03-05"
    }
];


const postsList = document.querySelector(".posts-list")

// const newPost = document.createElement("div")
// newPost.classList.add("post")



    posts.forEach(function(posts, i ) {    
        

        postsList.innerHTML += ((`
        <div class="post">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${posts.author.image}">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts.author.name}</div>
                        <div class="post-meta__time">${posts.created}</div>
                    </div>
                </div>
                </div>
                <div class="post__text">${posts.content}</div>
                <div class="post__image">
                <img src="${posts.media}" alt="">
                </div>
                <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="javascript:""" data-postid="${posts.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${posts.likes}</b> persone
                    </div>
                </div>
            </div>
        </div>`))
        
    //    if ( posts.author.image === null){
    //     const nomeSplit = posts.author.name.split(" ");
    //     console.log(nomeSplit);
    //     const nome = nomeSplit[0].split("");
    //     const cognome = nomeSplit[1].split("");
    //     // si un metodo molto orribile, so che se ci fossero 3 nomi non funzionerebbe 
    //     const iniziali = nome[0] + cognome[0];
    //     console.log(iniziali);

    //     // prendo div padre 
    //     const postMetaIconContainer = document.querySelector(".post-meta__icon");
    //     let nomeAlt = document.createElement("div");
    //     nomeAlt = iniziali;
    //     postMetaIconContainer.append(nomeAlt);   

        
    //    };

        
    });














 posts.forEach((element, i) => {
 let jsLikeBtn = document.querySelectorAll(".js-like-button");

 jsLikeBtn[i].addEventListener("click", function() {
     let btnLiked = jsLikeBtn[i].classList.toggle("like-button--liked");
     let jsLikeCounter = document.querySelectorAll(".js-likes-counter");

     

     if (btnLiked === true) {
         jsLikeCounter[i].innerHTML = element.likes + 1;

     } else { 
         jsLikeCounter[i].innerHTML = element.likes;
     }
 })
 })







