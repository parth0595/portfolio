console.log('Loaded!');
alert('hi, i love you.');

 // move the image
var image=document.getElementById('madi');
var marginLeft = 1;
function move(){
    
     marginLeft= marginLeft + 10;
    image.style.marginLeft= marginLeft + 'px';
    
    if(marginLeft== 200){
        
        image.style.marginLeft= '20px';
    }
}
image.onclick = function() {
var inerval = setInterval(move , 100);
};