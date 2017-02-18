console.log('Loaded!');
alert('hi, i love you.');

 // move the image
var image=document.getElementById('madi');
 var marginleft=0;
function move(){
    var marginleft= marginleft+10;
    image.style.marginleft= marginleft + 'px';
}
image.onclick = function() {
var inerval = setInterval(move , 100);
};