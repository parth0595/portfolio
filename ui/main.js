console.log('Loaded!');
alert('hi, i love you.');

 // move the image
var image=document.getElementById('madi');
var marginLeft = 0;
function move(){
     marginLeft= marginLeft + 10;
    image.style.marginLeft= marginLeft + 'px';
    if(marginLeft>200){
        marginLeft=marginLeft -10;
        image.style.marginLeft= marginLeft -'px';
    }
}
image.onclick = function() {
var inerval = setInterval(move , 100);
};