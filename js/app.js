var addPlayerHTML = function(newPlayer) {
  var playerHTML = "<tr class='player-row'><td class='remove-button'><span class='glyphicon glyphicon-remove-circle'></td>";
  playerHTML += "<td class='rank'>3</td><td class='player-name'>";
  playerHTML += newPlayer.name + "</td><td class='player-points'>" + newPlayer.points + "</td></tr>";
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

var pointsHTML = "<tr class='points-html'><td></td><td></td><td class='add-points'><div class='input-group'><span class='input-group-addon basic-addon1 add-points-button'><span class='glyphicon glyphicon-plus'></span></span><input type='text' class='form-control' placeholder='Points' aria-describedby='basic-addon1' id='points-input'></div></td></tr>"

//Click handler for player names
var selectedPlayer;
$(document).on("click", ".player-name", function() {
  $(this).parent().after(pointsHTML);
  selectedPlayer = $(this).text();
  console.log("The selected Player is " + selectedPlayer)
});

//Click handler for adding points button

$(document).on("click", ".add-points-button", function() {


  //Grab clicked player name and search in allPlayers array for this object; update its .points property
  for (var i = 0; i < allPlayers.length; i++) {
    if (allPlayers[i].name === selectedPlayer) {
      allPlayers[i].addPoints();
      console.log("Player's points are " + allPlayers[i].points);

      //Update player points in frontend: solve how to traverse the DOM
      //Traverse DOM: find <tr> parent of points input, go to previous sibling <tr>, travel down to its child with the class of "player-points"
      var $prevPlayerPoints = $(this).parentsUntil("tbody").prev().children(".player-points");
      $prevPlayerPoints.text(allPlayers[i].points);
    }
  }
  //Make points input disappear
  $(".points-html").remove();

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

$('body').click(function(e) {
  console.log(e.target);
});
