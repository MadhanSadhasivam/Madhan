let imageSrc=['https://images7.alphacoders.com/312/thumbbig-312123.webp','https://images6.alphacoders.com/339/thumbbig-339558.webp','https://images5.alphacoders.com/328/thumbbig-328234.webp','https://images5.alphacoders.com/913/thumbbig-913626.webp','https://images6.alphacoders.com/328/thumbbig-328240.webp']
let i=0;
let imageTurn
turn=()=>
   { 
    console.log(i)
    if(i < imageSrc.length)
    {  
    
    document.getElementById('image').src=imageSrc[i];
    i++;
    }
    else{
        i=0;
    }
   }
 imageTurn=setInterval(turn,1000);
 
 function pauseTurn() {
   clearInterval(imageTurn);
 }
 function resumeTurn()
 {
    imageTurn=setInterval(turn,1000);
 }