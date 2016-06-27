//Features to build
//1.  have JS display the world of brick/coin/etc.      -   DONE!
//2.  have the pacman move up, down, left and right

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

    function displayWorld(){
        var output = '';

        for(var i=0; i<world.length; i++){
            output += "\n<div class='row'>"
            for(var j=0; j<world[i].length; j++){
                if(world[i][j] == 2)
                    output += "\n\t<div class='brick'></div>";
                else if(world[i][j] == 1)
                    output += "\n\t<div class='coin'></div>";
                else if(world[i][j] == 0)
                    output += "\n\t<div class='pacman'></div>";    
                output = output + world[i][j];
            }
            output += "\n</div>"
        }
        $('#world').html(output);
    }

$(document).ready(function(){
    displayWorld();
})