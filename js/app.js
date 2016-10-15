var addPlayerHTML = function(newPlayer) {
  var playerHTML = "<tr class='player-row'><td class='remove-button'><span class='glyphicon glyphicon-remove-circle'></td>";
  playerHTML += "<td>3</td><td class='player-name'>";
  playerHTML += newPlayer.name + "</td><td>" + newPlayer.points + "</td></tr>";
  $("#players-table").append(playerHTML);
};

$(".add-player-button").click(function() {

  //Capture user input
  var $playerNameInput = $("#player-name-input").val();

  //Create player
  var newPlayer = new Player($playerNameInput, 0);
  allPlayers.push(newPlayer);

  //Add player to player list
  addPlayerHTML(newPlayer);

});

$("#add-player").click(function() {
  //Make input field appear
});

$("#player-name").click(function() {
  //Make input field appear
});

$("#add-points-button").click(function() {
  var pointsInput = $("#points-input").val();
});

var pointsHTML = "<tr><td class='add-points'><div class='input-group'><span class='input-group-addon basic-addon1 add-points-button'><span class='glyphicon glyphicon-plus'></span></span><input type='text' class='form-control' placeholder='Points' aria-describedby='basic-addon1' id='points-input'></div></td></tr>"

//Click handler for player names
var selectedPlayer;
$(document).on("click", ".player-name", function() {
  $(this).parent().append(pointsHTML);
  selectedPlayer = $(this).text();
  console.log("The selected Player is " + selectedPlayer)
});

//Click handler for adding points button

$(document).on("click", ".add-points-button", function() {
  console.log("Add points button was clicked");
  console.log(allPlayers);
  console.log(selectedPlayer);
  for (var i = 0; i < allPlayers.length; i++) {
    if (allPlayers[i].name === selectedPlayer) {
      allPlayers[i].addPoints();
      console.log("Player's points are " + allPlayers[i].points);
    }
  }
})

$(document).on("click", ".remove-button", function() {
  var selectedPlayer = $(this).next().next().text();
  //Remove player from allPlayers array
  for (var i = 0; i < allPlayers.length; i++) {
    if (allPlayers[i].name === selectedPlayer) {
      allPlayers.splice(i, 1);
    }
  }
  //Remove player from frontend
  $(this).parent().remove();
})


/*
var game = {

  players: [];
  addPlayer: function() {};
  addPoints: function() {};

}
*/
