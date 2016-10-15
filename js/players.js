function Player(name, points) {
  this.name = name;
  this.points = points;
}

Player.prototype.addPoints = function() {
  var pointsInput = $("#points-input").val();
  this.points += parseInt(pointsInput);
  console.log("adding points");
}

var allPlayers = [];
