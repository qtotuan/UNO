function Player(name, points) {
  this.name = name;
  this.points = points;
}

Player.prototype.addPoints = function() {
  var points = 0;
  this.points += 5;
  console.log("adding points");
}

var allPlayers = [];
