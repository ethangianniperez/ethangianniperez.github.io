// Tutorial 9 - JavaScript File

// 1. Display current date and time
function showDateTime() {
    const now = new Date();
    const dayTime = `Today is ${now.toDateString()} at ${now.toLocaleTimeString()}`;
    alert(dayTime); // Alert with current day/time
    return dayTime;
}

// Call function on load with delay (delayed execution)
setTimeout(showDateTime, 3000); // Wait 3 seconds

// 2. Math method example - rounding
let number = 7.8;
console.log("Rounded value:", Math.round(number)); // Output to console

// 3. Convert number to string and back
let num = 42;
let numStr = num.toString();
let backToNum = parseInt(numStr);
console.log("Converted to string:", numStr);
console.log("Back to number:", backToNum);

// 4. Countdown function
function startCountdown(seconds) {
    let count = seconds;
    const interval = setInterval(() => {
        console.log("Countdown:", count);
        count--;
        if (count < 0) {
            clearInterval(interval);
            alert("Countdown complete!");
        }
    }, 1000);
}

// Start a countdown of 5 seconds
startCountdown(5);
