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
  console.log(newPlayer);
  allPlayers.push(newPlayer);
  console.log(allPlayers);

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
  console.log(pointsInput);
});

$(document).on("click", ".player-name", function() {
  var selectedPlayer = $(this).text();
  console.log("Player has been clicked: " + selectedPlayer);
  console.log("AllPlayers are " + allPlayers);
  for (var i = 0; i < allPlayers.length; i++) {
    if (allPlayers[i].name === selectedPlayer) {
      allPlayers[i].addPoints();
      console.log("Player's points are " + allPlayers[i].points);
    }
  }
});

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
