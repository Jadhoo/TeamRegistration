const form = document.getElementById("form");
const players = document.getElementById('players');
const playersDatalist = document.getElementById("players-datalist");
var playersList = [];

form.addEventListener('focusin', (event) => {
    event.target.style.background = '#ebecf1';
  });
  
  form.addEventListener('focusout', (event) => {
    event.target.style.background = '';
  });

players.addEventListener('focusin', (event) => {
  playersList = [];
  playersDatalist.innerHTML = '';
});

// adding player names dynamically to the datalist
players.addEventListener('focusout', (event) => {
  var option;
  playersList = event.target.value.split(',');
  console.log(playersList.length);
  if(playersList.length > 4) {
    document.getElementById("error").innerText = "";
    console.log("sucess");
    playersList.forEach(addPlayer);
    function addPlayer(player) {
        option = document.createElement('option');
        option.value = player.trim();
        playersDatalist.appendChild(option);
    }
  }
  else {
    document.getElementById("error").innerText = "*There should be 5 to 7 players";
}
});