let heartRates = [];
let oxygenLevels = [];
let totalHeartRate= 0;
let oxygenLevel = [];
let totaloxygenLevel = 0;
let entryCount= 0;
let feedbackMessage = "";

const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", generateReport);

function generateReport(){
    let heartRate = Number(document.getElementById("heartRate").value);

    let oxygenlevel = Number(document.getElementById("spo2").value);

    heartRates.push(heartRate);
    oxygenLevels.push(oxygenlevel);

    totalHeartRate+=heartRate;
    totaloxygenLevel +=oxygenLevel;
    entryCount++;

    let avgHeartRate = totalHeartRate/entryCount;
    let avgOxygen = totaloxygenLevel/entryCount;    

    let riskScore = [100 - oxygenLevel] * 2 + Math.abs(heartRate - 80) * 0.5;

    if(riskScore<=10){
        feedbackMessage ="SAFE";
    }

    else if(riskScore>10 && riskScore<=20){
        feedbackMessage = "WARNING!";
    }
    else if(riskScore > 20){
        feedbackMessage = "DANGER"
    }

    document.getElementById("outputText").textContent ="Average Heart Rate: "+ avgHeartRate + "Average Oxygen Saturation : "+avgOxygen + " risk score: "+ riskScore + "Feedback: " + feedbackMessage;
}