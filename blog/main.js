let feed;fetch("../feed.json").then(data => {data.json().then(data => {feed = data})}).then(() => {
    for(var i = 0;i < feed.posts.length;i++) {
        $('#posts-box').html("<h1>" + feed.posts[i].blogTitle + "</h1>" + "<p>" + feed.posts[i].blogText + "</p>"+ $('#posts-box').html())
    }
})
$('#page').addClass('slideInDown')
//AJAX animation things
$(function(){"use strict";var t={prefetch:!0,cacheLength:2,onStart:{duration:250,render:function(t){t.addClass("slideOutDown"),n.restartCSSAnimations()}},onReady:{duration:0,render:function(t,n){t.removeClass("slideOutDown"),t.html(n)}}},n=$("#page").smoothState(t).data("smoothState")});
