function newPost(i, post){
    return `<div class="new-post">
    <div class="posted">
    <div class="author">${post['author']}
    <div class="location"><b>${post['location']}</div>
    </div>
    </div>
    <img src="${post['image']}">
    <div class="socials">
    <img src="icons/favorite-3-32.png" id="off${i}" onclick="likeIt(${i})">
    <img src="icons/favorite-2-32.png" id="on${i}" onclick="dislike(${i})" class="d-none">
    <img src="icons/speech-bubble-32.png" onclick="notIncluded()">
    <img src="icons/sharethis-32.png" onclick="notIncluded()"> 
    <div id="follower_${i}" class="follower">Gefällt<b> ${post['likes']} Personen<b></div>
    </div>
    <div class="description">${post['description']}</div>
    <div id="comments_${i}" class="comments"></div>
    <div class="smileys">
    <img src="icons/happy-32.png" onclick="notIncluded()">
    <input type="text" class="commentBox" id="commentBox_${i}" placeholder="Kommentieren...">
    <button class="post-it" id="post-it" onclick="comment(${i})">Posten</button>
    </div>

    </div>
    `;
}