var main =document.querySelector('.main');
var cursor=document.querySelector(".cursor");


main.addEventListener("mousemove", function(dets){
 cursor.style.top=dets.y+"px";
  cursor.style.left=dets.x+"px";

});