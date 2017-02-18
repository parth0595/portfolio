console.log('Loaded!');
alert('hi, i love you.');

 // move the image
var image=document.getElementById('madi');
function move(){
    //var marginLeft= marginLeft+10;
    //image.style.marginLeft= marginLeft + 'px';
}
image.onclick = function() {
//var inerval = setInterval(move , 100);
 image.style.marginLeft= '100px';
};