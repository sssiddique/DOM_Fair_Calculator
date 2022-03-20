
function rent(vehicleVal, distanceVal){
    if(vehicleVal=='bus' && distanceVal=='10'){
        return parseInt(distanceVal)*10;
    }else if(vehicleVal=='bus' && distanceVal=='15'){
        return parseInt(distanceVal)*10;
    }else if(vehicleVal=='bus' && distanceVal=='20'){
        return parseInt(distanceVal)*10;
    }else if(vehicleVal=='car' && distanceVal=='10'){
        return parseInt(distanceVal)*15;
    }else if(vehicleVal=='car' && distanceVal=='15'){
        return parseInt(distanceVal)*15;
    }else if(vehicleVal=='car' && distanceVal=='20'){
        return parseInt(distanceVal)*15;
    }else if(vehicleVal=='train' && distanceVal=='10'){
        return parseInt(distanceVal)*20;
    }else if(vehicleVal=='train' && distanceVal=='15'){
        return parseInt(distanceVal)*20;
    }else if(vehicleVal=='train' && distanceVal=='20'){
        return parseInt(distanceVal)*20;
    }else{
        return 0;
    }
};


let vehicleSel = document.getElementById("vehicle");
let distanceSel = document.getElementById("distance");
document.getElementById('btn').addEventListener('click', function hello(){
    
    x = vehicleSel.value;
    y = distanceSel.value;
    // console.log(rent(vehicleSel,distanceSel));
    let output = rent(x,y);
    let calc = document.getElementById("calculate");
    calc.value = output;
});
