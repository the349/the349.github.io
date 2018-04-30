let feed;fetch("../feed.json").then(data => {data.json().then(data => {feed = data})}).then(() => {
    for(var i = 0;i < feed.posts.length;i++) {
        $('#posts-box').html(feed.posts[i] + $('#posts-box').html())
    }
})
