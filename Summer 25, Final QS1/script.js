const CALORIE_GOAL = 2000;

let calorieInput = document.getElementById("calorieInput");

console.log(calorieInput);

let addButton = document.getElementById("addButton");

let label = document.getElementById("label");

let totalCalories =0;
let feedbackMessage = "";
let totalEntries = 0;  

addButton.addEventListener("click", calculateCalories);

function calculateCalories(){
    let calorieValue = calorieInput.value;

    totalEntries++;

    totalCalories+=Number(calorieValue);

    console.log(totalCalories);

    if(totalCalories>=0 && totalCalories<=800){
        feedbackMessage = "You are off to a heatlthy start!"
    }
    else if(totalCalories>=801 && totalCalories<=1600){
        feedbackMessage = "Good progress"
    }

    else if(totalCalories>1601 && totalCalories<=1999){
        feedbackMessage = "Almost at your limit"
    }

    else if(totalCalories>=2000){
        feedbackMessage = "Goal Reached! Stay Mindful"
    }

    if(totalEntries>10 && totalCalories<CALORIE_GOAL){
        feedbackMessage = "Be cautious of frequent snacking!"
    }

    console.log(totalCalories);
    console.log(totalEntries);
    console.log(feedbackMessage);

    label.textContent = "Total Calories: "+ totalCalories + " Number of Entries: "+ totalEntries + " Feedback: "+feedbackMessage;
}
