console.log('Loaded!');
alert('hi, i love you.');

 // move the image
var image=document.getElementById('madi');
var marginLeft = 0;
var marginRight =0
function move(){
    if(marginRight>500)
     {marginLeft= marginLeft + 10;
    image.style.marginLeft= marginLeft + 'px';}
    
    if(marginLeft>500){
        marginLeft=marginLeft + 10;
        image.style.marginRight= marginRight + 'px';
    }
}
image.onclick = function() {
var inerval = setInterval(move , 100);
};