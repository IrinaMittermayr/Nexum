/**
 * Created by Irina on 15/04/2018.
 */
function Player(points, name){
    this.points = points;
}

Player.prototype.addPoints = function(newPoints){ //adds new points to the points the user already has
    this.points += newPoints;
};