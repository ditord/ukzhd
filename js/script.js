// Get the clients location from the form


function showNextTrain() {

    let loc = document.getElementById("city").value;


    // Get the current hour and minute
    let now = new Date();
    let hh = now.getHours();
    let mm = now.getMinutes();

    // Check for conditions based on location and time and printout the departure time
    //For Gyumri
    if (loc == 1) {
        if (hh >= 19) {
            document.getElementById("nexttrain").value = "7:45";
        } else if (hh >= 17) {
            document.getElementById("nexttrain").value = "18:15";
        } else if (hh >= 12) {
            document.getElementById("nexttrain").value = "17:55";
        } else if (hh >= 8) {
            document.getElementById("nexttrain").value = "11:55";
        } else {
            document.getElementById("nexttrain").value = "7:45";
        }



        if (hh == 18 && mm >= 15) {
            document.getElementById("nexttrain").value = "7:45";
        }
        if (hh == 17 && mm >= 55) {
            document.getElementById("nexttrain").value = "18:15";
        }
        if (hh == 11 && mm >= 55) {
            document.getElementById("nexttrain").value = "17:55";
        }
        if (hh == 7 && mm >= 45) {
            document.getElementById("nexttrain").value = "11:55";
        }
        if (hh == 17 && mm < 55) {
            document.getElementById("nexttrain").value = "17:55";
        }




    }
    //For Yerevan
    if (loc == 2) {
        if (hh >= 19) {
            document.getElementById("nexttrain").value = "7:55";
        } else if (hh >= 15) {
            document.getElementById("nexttrain").value = "18:25";
        } else if (hh >= 10) {
            document.getElementById("nexttrain").value = "14:15";
        } else if (hh >= 8) {
            document.getElementById("nexttrain").value = "9:15";
        } else {
            document.getElementById("nexttrain").value = "7:55";
        }

        if (hh == 18 && mm >= 25) {
            document.getElementById("nexttrain").value = "7:55";
        }
        if (hh == 14 && mm >= 25) {
            document.getElementById("nexttrain").value = "18:25";
        }
        if (hh == 9 && mm >= 15) {
            document.getElementById("nexttrain").value = "14:15";
        }
        if (hh == 7 && mm >= 55) {
            document.getElementById("nexttrain").value = "9:15";
        }


    }

    //console.log(loc)
    console.log(loc)
    console.log(now)
    console.log(hh)
    console.log(mm)
}
showNextTrain();
setInterval("showNextTrain()", 1000);
