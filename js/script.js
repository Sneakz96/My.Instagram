

// render my content
function renderContent() {
    load();
    document.getElementById('posts').innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        document.getElementById('posts').innerHTML +=
            newPost(i, post);
        addComment(i);
    }
}

// push-function for comment + save() + load()
function comment(i) {
    let comment = document.getElementById(`commentBox_${i}`);
    posts[i].comments.push(comment.value);

    addComment(i);
    save();
    comment.value = '';
}

// add comment from input field to comments-div
function addComment(index) {

    let content = document.getElementById(`comments_${index}`);

    content.innerHTML = '';

    for (let i = 0; i < posts[index].comments.length; i++) {
        content.innerHTML += `
        <div class="commentary">Gast:${posts[index].comments[i]}</div>`
    }
}

// save to local storage 
function save() {
    let postsAsText = JSON.stringify(posts);
    localStorage.setItem('posts', postsAsText);
}

// load from local storage 
function load() {
    let postsAsText = localStorage.getItem('posts');

    if (postsAsText) {
        posts = JSON.parse(postsAsText);
    }
}

// like function - heart-outline click -> add +1 to likes -> show heart-filled
function likeIt(i) {
    document.getElementById('off' + i).classList.add('d-none');
    let numberOfLikes = posts[i].likes +1;
    document.getElementById(`follower_${i}`).innerHTML = `Gefällt ${numberOfLikes} Personen`;
    document.getElementById('on' + i).classList.remove('d-none');
}

// dislike function - heart-filled click -> remove -1 from likes -> show heart-outlined 
function dislike(i) {
    document.getElementById('on' + i).classList.add('d-none');
    let numberOfLikes = posts[i].likes;
    document.getElementById(`follower_${i}`).innerHTML = `Gefällt ${numberOfLikes} Personen`;
    document.getElementById('off' + i).classList.remove('d-none');
}

//search -> take input -> start filterNames() and clear input field 
function search() {
    let searchText = document.getElementById('inputText');
    searchText.value = '';
    filterNames()
}





function filterNames() {
    let search = document.getElementById('inputText').value;
    search = search.toLowerCase();

    let searchPost= document.getElementById('posts');
    searchPost.innerHTML = '';

    for (let i = 0; i < posts[i].length; i++) {
        let post = posts[i];
        if (post.toLowerCase().includes(search)) {
            listsearchPost.innerHTML += newPost(i, post);
        }
    }
}



















// alert-not included
function notIncluded() {
    alert('sorry, not included.');
}

