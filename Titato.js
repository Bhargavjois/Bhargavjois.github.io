var winner=1;
var audio = new Audio("Touch_Sound_Effect_(Private_Only)(128k).mp3");
var audio_win = new Audio("win_sound(128k).mp3");
var all_full=0;
var turn= "x";
function turn_change(){
  if (turn=="x"){
   var trno=  document.getElementById("turn");
   trno.innerHTML=" X";
   trno.style.color="#02e7f7";
  }
  else{
   var trnt=document.getElementById("turn");
   trnt.innerHTML=" O";
   trnt.style.color="yellow";
  }
}
function change(i){
 if(winner){
  var tile=document.getElementsByClassName("tile")[i];
  if(tile.innerHTML!="x" && tile.innerHTML!="o"){
    if (turn=="x"){
      tile.innerHTML=turn;
      tile.style.color="#02e7f7";
      turn="o";
      turn_change();
      audio.play();
      audio.playbackRate=4.0;
    }
    else{
      tile.innerHTML=turn;
      tile.style.color="yellow";
      turn="x";
      turn_change();
      audio.play();
      audio.playbackRate=4.0;
    }
  }
 win_check();
 draw_check();
 }
}

const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]     ];
function win_check(){
  var tile_info=document.getElementsByClassName("tile");
  for(var j=0;j<8;j++){
    const a = winningCombinations[j][0];
    const b = winningCombinations[j][1];
    const c = winningCombinations[j][2];
    if (tile_info[a].innerHTML=="x" && tile_info[b].innerHTML=="x" && tile_info[c].innerHTML=="x"){
      document.getElementById("mid").innerHTML="X wins";
      document.getElementById("mid").style.color="#02e7f7";
      tile_info[a].style.color="#33fb33";
      tile_info[b].style.color="#33fb33";
      tile_info[c].style.color="#33fb33";
      tile_info[a].style.backgroundColor="#0b3d06";
      tile_info[b].style.backgroundColor="#0b3d06";
      tile_info[c].style.backgroundColor="#0b3d06";
      audio_win.play();
      winner=0;
    }
    else if (tile_info[a].innerText=="o" && tile_info[b].innerText=="o" && tile_info[c].innerText=="o"){
      document.getElementById("mid").innerHTML="O wins";
      document.getElementById("mid").style.color="yellow";
      tile_info[a].style.color="#33fb33";
      tile_info[b].style.color="#33fb33";
      tile_info[c].style.color="#33fb33";
      tile_info[a].style.backgroundColor="#0b3d06";
      tile_info[b].style.backgroundColor="#0b3d06";
      tile_info[c].style.backgroundColor="#0b3d06";
      audio_win.play();
      winner=0;
    }
    
  }
}            

function draw_check(){
  
}
            
function refresh(){
  var tile_info=document.getElementsByClassName("tile");
  for(var k=0;k<9;k++){
    document.getElementsByClassName("tile")[k].innerHTML=" ";
    document.getElementById("mid").style.color="#fff";
    tile_info[k].style.backgroundColor="#000";
  }
  winner=1;
  document.getElementById("mid").innerHTML="Play";
  
  
}
            
            
            
turn_change();
            