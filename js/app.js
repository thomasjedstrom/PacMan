//Features to build
//1.  have JS display the world of brick/coin/etc.      -   DONE!
//2.  have the pacman move up, down, left and right


//WORLD
var world = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,0,2,1,1,1,1,1,1,2],
    [2,1,2,1,1,1,2,2,1,2],
    [2,1,2,2,2,1,1,2,1,2],
    [2,1,1,1,2,2,2,2,1,2],
    [2,1,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2]
]

//PACMAN
var pacman = {
    x: 1,
    y: 1
}

//SCORE
var score = 0;

//DISPLAY WORLD
function displayWorld(){
    var output = '';

    for(var i=0; i<world.length; i++){
        output += "\n<div class='row'>\n"
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] == 2)
                output += "<div class='brick'></div>";
            else if(world[i][j] == 1)
                output += "<div class='coin'></div>";
            else if(world[i][j] == 0)
                output += "<div class='empty'></div>";    
            //output = output + world[i][j];
        }
        output += "\n</div>"
    }
    $('#world').html(output);
}

//DISPLAY PACMAN
function displayPacman(){
    document.getElementById('pacman').style.left = pacman.x*20+"px";
    document.getElementById('pacman').style.top = pacman.y*20+"px";
}
//DISPLAY SCORE
function displayScore(){
    document.getElementById('score').innerHTML = score;
}


//PACMAN MOVEMENT
document.onkeydown = function(e){
//LEFT
    if(e.keyCode == 37 && world[pacman.y][pacman.x-1]!=2){
        pacman.x --;
    }
//RIGHT
    else if(e.keyCode == 39 && world[pacman.y][pacman.x+1]!=2){
        pacman.x ++;
    }
//DOWN
    else if(e.keyCode == 38 && world[pacman.y-1][pacman.x]!=2){
        pacman.y --;
    }
//UP
    else if(e.keyCode == 40 && world[pacman.y+1][pacman.x]!=2){
        pacman.y ++;
    }
    
    if(world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score+=10;
        displayWorld();
        displayScore();
    }
    
    
    displayPacman()
}



$(document).ready(function(){
    displayWorld();
    displayPacman();
    displayScore();

})