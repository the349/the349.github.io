let feed;fetch("../feed.json").then(data => {data.json().then(data => {feed = data})}).then(() => {
    for(var i = 0;i < feed.posts.length;i++) {
        $('#posts-box').html("<div>" + feed.posts[i].blogHead + "</div>" + "<h1>" + feed.posts[i].blogTitle + "</h1>" + "<p>" + feed.posts[i].blogText + "</p>"+ $('#posts-box').html())
    }
})
$('#page').addClass('slideInDown')
