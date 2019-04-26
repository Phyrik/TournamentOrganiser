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

document.title = getQueryVariable("name");

if (document.title.indexOf("+") >= 0) {
    document.title = document.title.replace("+", " ");
}

document.getElementById("title").innerHTML = document.title;