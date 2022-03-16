let vehicleVal = document.getElementById("vehicle");
let distanceVal = document.getElementById("distance");
let calc = document.getElementById("calculate");
console.log(vehicleVal.value);

distanceVal.parseInt("distanceVal");

document.getElementById('btn').addEventListener('click', function(){
    switch( vehicleVal, distanceVal){
        case vehicleVal=="bus" && distanceVal=="100":
            calc.value = distanceVal*10;
        break;
        default:
            console.log("None");
            break;
    }
});