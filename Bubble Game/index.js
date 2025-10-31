var rnval;
var value=0;

function createBubble(){
var clutter="";

for(var i=1 ;i<=80; i++){
    var rn=Math.floor(Math.random()*10)
    clutter +=`<div id="boll">${rn}</div>`;

}
document.querySelector("#display").innerHTML=clutter;
}

function hitBubble(){
   rnval= Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent=rnval;
}
function increaseScore(){
     value=value+10;
    document.querySelector("#score").textContent=value;

}
function decrease(){
     value=value-10;
    document.querySelector("#score").textContent=value;

}

document.querySelector("#display")
.addEventListener("click",function(e){
  var num=(Number(e.target.textContent));
 
  
  if(num===rnval){
 increaseScore();
 hitBubble();
 createBubble();

  }
  else{
    decrease();
    hitBubble();
 createBubble();
  }
})
var time=60;
function timer(){
    
 var st=setInterval(function(){
    if(time>0){
        time--;
        document.querySelector('#clock').innerHTML=time;
    } else{
        clearInterval(st);
        document.querySelector('#display').innerHTML=`<h1 id='game'>GAME OVER<h1/>`;
    }
    },1000)
   
}

    


createBubble();
hitBubble();
timer();

