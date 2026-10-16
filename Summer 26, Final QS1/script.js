const weeklyGoal = 20;

let totalHours = 0;
let avgStudyhrs = 0;
let subjectList = [];
let feedbackMesssage = "";
let sessionCount = 0; 

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addStudy);

function addStudy(){
    let subject = document.getElementById("subject").value;
    
    let hours = document.getElementById("hours").value;

    totalHours +=hours;
    subjectList.push(subject);
    sessionCount++;
    avgStudyhrs = totalHours / sessionCount;

    if(totalHours>=0 && totalHours<=5){
        feedbackMesssage = "Start studying regularly";
    }
    else if(totalHours>=6 && totalHours<=12){
        feedbackMesssage = "Good progress!";
    }
    else if(totalHours>=13 && totalHours<=19){
        feedbackMesssage = "Almost ready!";
    }
    else if(totalHours>=20){
        feedbackMesssage = "Weekkly goal reached";
    }

    if(sessionCount>7 && totalHours<weeklyGoal){
        feedbackMesssage = "Increase your study time!"
    }

    document.getElementById("output").textContent
    ="Total: "+totalHours+" hours, Average: "+avgStudyhrs + " hours, Subjects: ["+ subjectList.join(" ,") + "], "+ feedbackMesssage;
}