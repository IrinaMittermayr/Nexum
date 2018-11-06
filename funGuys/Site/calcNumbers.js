/**
 * Created by Irina on 03/06/2018.
 */



let similarity = 0;

if(playertwopointsarray[7] != playeronepointsarray[7]){
    similarity ++;
}else if(playertwopointsarray[10] != playeronepointsarray[10]){
    similarity ++;
}else if(playertwopointsarray[13] != playeronepointsarray[13]){
    similarity ++;
}else if(playertwopointsarray[15] != playeronepointsarray[15]){
    similarity ++;
}


sizetwo = (playertwopointsarray[2] + playertwopointsarray[8] + playertwopointsarray[4] - playertwopointsarray[12])/100;
sizeone = (playeronepointsarray[2] + playeronepointsarray[8] + playeronepointsarray[4] - playeronepointsarray[12])/100;



function init(){

    let worker;
    worker = new Worker("Worker.js");

    let workerwar;

    worker.onmessage = function(event){
        workervar = event.data;
    };

}

$(document).ready(init);

