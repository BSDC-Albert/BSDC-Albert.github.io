console.log("Get out of the console NOW")
var aTags = document.querySelectorAll('span[data-href]');

for(var i = 0; i < aTags.length; i++){
    var aTag = aTags[i];
    aTag.addEventListener('click', function(e){
        var ele = e.target;
        window.location.replace(ele.getAttribute('data-href'));
    });    
}
span[data-href]{
    cursor:pointer;
}
<span data-href="http://www.google.com">test</span>