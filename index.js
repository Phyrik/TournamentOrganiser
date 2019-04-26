function newTournament() {
    window.open("./new-tournament.html", "_self")
}

for (let i = 0; i < parseInt(localStorage.getItem("numberOfTourneys"), 10); i++) {
    var tourney = document.createElement("li");
    var tourneyInfo = localStorage.getItem("tourney" + i.toString()).split(",");
    var tourneyTitle;
    if (tourneyInfo[0].indexOf("+") >= 0) {
        tourneyTitle = document.createTextNode("Name: " + tourneyInfo[0].replace("+", " ") + ". ");
    } else {
        tourneyTitle = document.createTextNode("Name: " + tourneyInfo[0] + ". ");
    }
    tourney.appendChild(tourneyTitle);
    tourney.appendChild(document.createElement("br"));
    var tourneyParicipants = document.createTextNode("Participants: " + tourneyInfo.slice(1) + ".");
    tourney.appendChild(tourneyParicipants);
    var viewTourney = document.createElement("input");
    viewTourney.setAttribute("id", tourneyInfo[0] + "Btn");
    viewTourney.setAttribute("type", "button");
    viewTourney.setAttribute("onclick", "viewTournament(this)");
    tourney.appendChild(document.createElement("br"));
    tourney.appendChild(viewTourney);
    tourney.setAttribute("id", tourneyInfo[0]);
    document.getElementById("tourneys").appendChild(tourney);
}

function viewTournament(button) {
    tourneyName = button.id.replace("Btn", "");
    window.open("./tournament.html?name=" + tourneyName, "_self");
}