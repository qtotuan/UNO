function Player(name, points) {
  this.name = name;
  this.points = points;
}

Player.prototype.addPoints = function() {
  var pointsInput = parseInt($("#points-input").val());
  var TESTisNaN = isNaN(pointsInput);
  if (TESTisNaN) {
    alert("Please input points");
    return false;
  }
  this.points += pointsInput;
}
//allPlayers = [{name: "A", points:1}, {name: "C", points:3}, {name: "B", points: 2},];
