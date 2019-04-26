function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

var tourneyName = getQueryVariable("tourneyName");
var tourneyParticipants = getQueryVariable("tourneyParticipants");
var tourneyParticipants = tourneyParticipants.split("%2C");
var tourneyInfo = [tourneyName, tourneyParticipants];
var numberOfTourneys = localStorage.getItem("numberOfTourneys");
if (numberOfTourneys === null) {
    numberOfTourneys = "0";
}
localStorage.setItem("tourney" + numberOfTourneys, tourneyInfo);
var newNumberOfTourneys = (parseInt(numberOfTourneys, 10) + 1).toString();
localStorage.setItem("numberOfTourneys", newNumberOfTourneys);

window.open("./index.html", "_self");