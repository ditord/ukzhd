// Get the clients location from the form

document.getElementById("submit").onclick = function(){

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
  if (loc == 1 && hh > 19){
        document.getElementById("nexttrain").value = "8:25";
  }
  else if(loc == 1 && hh >= 8 && mm >= 25){
          document.getElementById("nexttrain").value = "11:45";
  }
  else if (loc == 1 && hh <= 18 && hh <= 5){
          document.getElementById("nexttrain").value = "18:05";
  }
  else if (loc == 2 && hh > 19){
        document.getElementById("nexttrain").value = "7:55";
  }
  else if (loc == 2 && hh > 7 && mm > 55){
            document.getElementById("nexttrain").value = "14:30";
  }
  else if (loc == 2 && hh <= 18 && hh < 15){
            document.getElementById("nexttrain").value = "18:15";
  }
}
