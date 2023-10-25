//The user will enter the date that they were born in and this script will calculate how old they are today (at the current date)

//animate the changes!

let dayValid = false
let leapYear = false
let monthValid = false
let yearValid = false
const months31 = [1,3,5,7,8,10,12]
const months30 = [4,6,9,11]
const currentDate = new Date()
let currentDay = currentDate.getDate()
let currentMonth = currentDate.getMonth() + 1
let currentYear = currentDate.getUTCFullYear()
let calculatedDay;
let calculatedMonth;
let calculatedYear;

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("calc-btn")
    btn.addEventListener("click", calcAge, false)
});


function calcAge() {
    const dayInput = parseInt(document.getElementById("day-input").value)
    const monthInput = parseInt(document.getElementById("month-input").value) 
    const yearInput =  parseInt(document.getElementById("year-input").value)

    isDayValid(dayInput, monthInput)
    isMonthValid(monthInput)
    isYearValid(yearInput)
    isLeapYear(yearInput)

    clearErrorMessage()

    //calculation
    calculatedDay = currentDay - dayInput;
    calculatedMonth = currentMonth - monthInput;
    calculatedYear = currentYear - yearInput; 

    //so that the result doesn't go into negative
    if(currentMonth >= monthInput){
        calculatedMonth = currentMonth - monthInput
    }
    else{
        calculatedYear--;
        calculatedMonth = 12 + currentMonth - monthInput
    }

    if(currentDay >= dayInput){
        calculatedDay = currentDay - dayInput
    }
    else{
        calculatedMonth--;
        calculatedDay = 31 + currentDay - dayInput
    }

    if((dayValid === true) && (monthValid === true) && (yearValid === true)){
        document.getElementById("year-number").innerHTML = calculatedYear
        document.getElementById("month-number").innerHTML = calculatedMonth
        document.getElementById("day-number").innerHTML = calculatedDay
    }
    else if((dayValid === true) && (monthValid === true) && (yearValid === true) && (isLeapYear === true)){
        document.getElementById("year-number").innerHTML = calculatedYear
        document.getElementById("month-number").innerHTML = calculatedMonth
        document.getElementById("day-number").innerHTML = calculatedDay
    }
    else{
        errorHandler(dayValid,yearValid,monthValid,dayInput,monthInput,yearInput);
    }

}

function isDayValid(dayInput, monthInput){
    if((months31.includes(monthInput) && dayInput >= 1 && dayInput <= 31) || (months30.includes(monthInput) && dayInput >= 1 && dayInput <= 30) || ((monthInput === 2) && (dayInput >= 1 && dayInput <= 29) && leapYear == true) || ((monthInput === 2) && (dayInput >= 1 && dayInput <= 28) && leapYear == false) ){
        dayValid = true
    }
    else{
        dayValid = false
    }
    return dayValid;
}

function isMonthValid(monthInput){
    if(monthInput >= 1 && monthInput <= 12){
        monthValid = true
    }
    else{
        monthValid = false
    }
    return monthValid;
}

function isYearValid(yearInput){
    if(yearInput <= currentYear){
        yearValid = true
    }
    else{
        yearValid = false
    }
    return yearValid;
}


//this function serves only to know if the user input for the year is a leap year and if so they would be able to enter an extra day in february
//so instead of only able to enter the day (28) in february they can now input 29
function isLeapYear(yearInput){
    if (yearInput % 100 === 0 ? yearInput % 400 === 0 : yearInput % 4 === 0){
        leapYear = true
    }
    else{
        leapYear = false
    }
    return leapYear

}

function errorHandler(dayValid,yearValid,monthValid,dayInput,monthInput,yearInput){
    if(dayValid === false){
        document.getElementById("dayInput-p-error-state").style.display = "block"
        document.getElementById("dayInput-p-error-state").innerHTML = "Must be a valid day"
        document.getElementById("day-input").style.borderColor = "hsl(0, 100%, 67%)"
        document.getElementById("day-input-label").style.color = "hsl(0, 100%, 67%)"        
    }
    if(monthValid === false){
        document.getElementById("monthInput-p-error-state").style.display = "block"
        document.getElementById("monthInput-p-error-state").innerHTML = "Must be a valid month"
        document.getElementById("month-input").style.borderColor = "hsl(0, 100%, 67%)"
        document.getElementById("month-input-label").style.color = "hsl(0, 100%, 67%)"
    }
    if(yearValid === false){
        document.getElementById("yearInput-p-error-state").style.display = "block"
        document.getElementById("yearInput-p-error-state").innerHTML = "Must be in the past"
        document.getElementById("year-input").style.borderColor = "hsl(0, 100%, 67%)"
        document.getElementById("year-input-label").style.color = "hsl(0, 100%, 67%)"        
    }
    if (isNaN(dayInput)) {
        document.getElementById("dayInput-p-error-state").style.display = "block";
        document.getElementById("dayInput-p-error-state").innerHTML = "This field is required";
        document.getElementById("day-input").style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("day-input-label").style.color = "hsl(0, 100%, 67%)";
    }
    if (isNaN(monthInput)) {
        document.getElementById("monthInput-p-error-state").style.display = "block";
        document.getElementById("monthInput-p-error-state").innerHTML = "This field is required";
        document.getElementById("month-input").style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("month-input-label").style.color = "hsl(0, 100%, 67%)";
    }
    if (isNaN(yearInput)) {
        document.getElementById("yearInput-p-error-state").style.display = "block";
        document.getElementById("yearInput-p-error-state").innerHTML = "This field is required";
        document.getElementById("year-input").style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("year-input-label").style.color = "hsl(0, 100%, 67%)";
    }
}

function clearErrorMessage(){
    document.getElementById("dayInput-p-error-state").style.display = "none"
    document.getElementById("dayInput-p-error-state").innerHTML = ""
    document.getElementById("day-input").style.borderColor = ""
    document.getElementById("day-input-label").style.color = ""

    document.getElementById("monthInput-p-error-state").style.display = "none"
    document.getElementById("monthInput-p-error-state").innerHTML = ""
    document.getElementById("month-input").style.borderColor = ""
    document.getElementById("month-input-label").style.color = ""

    document.getElementById("yearInput-p-error-state").style.display = "none"
    document.getElementById("yearInput-p-error-state").innerHTML = ""
    document.getElementById("year-input").style.borderColor = ""
    document.getElementById("year-input-label").style.color = ""
}




