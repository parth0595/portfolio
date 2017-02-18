console.log('Loaded!');
alert('hi, i love you.');

 // move the image
var image=document.getElementById('madi');

function move(){
    var marginLeft = 0;
    marginLeft= marginLeft + 10;
   image.style.marginLeft= marginLeft + 'px';
   if(marginLeft==300){
        image.style.marginLeft= '10px';
    
   }
    }
image.onclick = function() {
var inerval = setInterval(move , 100);
};