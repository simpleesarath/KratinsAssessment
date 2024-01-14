// Initial step count
let totalSteps = 0;

// Function to increment step count
function incrementSteps() {
    totalSteps++;
    document.getElementById('totalSteps').textContent = totalSteps;
    if(totalSteps > 8000){
        alert("congrats! for completing your daily walking task" );
    }
}
function incrementrounds(){
    totalSteps+=500;
    document.getElementById('totalSteps').textContent = totalSteps;
    if(totalSteps >= 6000){
        alert("congrats! for completing your daily walking task" );
    }
    
}

// Function to save workout log
function saveWorkoutLog() {
    const logText = document.getElementById('logTextarea').value;
    if (logText.trim() !== '') {
        alert(`Workout Log Saved:\n${logText}`);
        // You can send the logText to a backend for storage here
    } else {
        alert('Please enter your workout log before saving.');
    }
}
