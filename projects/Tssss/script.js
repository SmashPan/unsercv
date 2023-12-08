const btn = document.getElementById("button");
const height = document.documentElement.clientHeight;
const width = document.documentElement.clientWidth;
const image = document.getElementById("scream");
var scream_audio = new Audio('laughter.mp3');



btn.addEventListener("click", () => {
  let smth = Math.floor((Math.random() * 10));
  if(smth==9 || smth==1 || smth==5){
    image.style.display = "block";
    scream_audio.play();
  }
    let randY = height-height/4 - Math.floor((Math.random() * height)-1);
    let randX = width-width/4 - Math.floor((Math.random() * width)-1);
    btn.style.transform = `translate(${randX}px, ${randY}px)`;
  });
 
