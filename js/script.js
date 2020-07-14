// Get the clients location from the form

document.getElementById("submit").onclick = function() {

    var loc = document.getElementById("city").value;
    console.log(loc)

    // Get the current hour and minute
    var now = new Date();
    var hh = now.getHours();
    var mm = now.getMinutes();
    console.log(now)
    console.log(hh)
    console.log(mm)

    // Check for conditions based on location and time and printout the departure time
    if (loc == 1 && hh>19) {
        document.getElementById("nexttrain").value = "7:45";
     }
     else if (loc==1 && hh>=18) {
        document.getElementById("nexttrain").value = "18:15";
    }
    else  if(loc==1 && hh>=12){
        document.getElementById("nexttrain").value = "17:55";
    }
    else if (loc==1 && hh>=8) {
        document.getElementById("nexttrain").value = "11:55";
    }
    else if(loc ==1){
        document.getElementById("nexttrain").value = "7:45";
    }
    else if(loc==2 && hh>=19){
        document.getElementById("nexttrain").value = "7:55";
    }
    else if(loc == 2 && hh>=15 ){
        document.getElementById("nexttrain").value = "18:25";
    }
    else if(loc==2 && hh>=10){
        document.getElementById("nexttrain").value = "14:15";
    }
    else if(loc==2 && hh>=8){
        document.getElementById("nexttrain").value = "9:15";
    }
    else if(loc==2){
        document.getElementById("nexttrain").value = "7:55";
    }
}