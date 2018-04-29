var page
var blogEmbed
$('body').ready(function () {
    $(function(){"use strict";var t={prefetch:!0,cacheLength:2,onStart:{duration:250,render:function(t){t.addClass("is-exiting"),n.restartCSSAnimations()}},onReady:{duration:0,render:function(t,n){t.removeClass("is-exiting"),t.html(n)}}},n=$("#page").smoothState(t).data("smoothState")});
    //include all include attrs
    includeHTML()
})
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
