//The user will enter the date that they were born in and this script will calculate how old they are today (at the current date)

//if no date has been entered but button is clicked, "This field is required"
//when user enters less than 1 for dayInput message popup "Must be a valid day"
//when user enters a value above 12 for monthInput message popup "Must be a valid month"
//when user enters a year above for yearInput then message pop up "Must be in the past"

//when user enters the date today message pop up "Welcome to the world"
//if user enters a leap year and the month that they entered is february which is 2 then they would be able to enter 29 instead of only until 28 days

//if the user enters a date that doesn't actually exist message popup "Must be a valid date"

//animate the changes

//to reset the dom when it encounters an error
let errorStates = document.querySelectorAll(".error-states")
// let dayError = document.getElementById("#day-input")
// let monthError = document.getElementById("#month-input")
// let yearError = document.getElementById("#year-input")
let dateValid = false
let leapYear = false
const months31 = [1,3,5,7,8,10,12]
const months30 = [4,6,9,11]
const currentDate = new Date()
let currentDay = currentDate.getDate()
let currentMonth = currentDate.getMonth() + 1
let currentYear = currentDate.getUTCFullYear()
let calculatedDay;
let calculatedMonth;
let calculatedYear;

const btn = document.getElementById("calc-btn")
btn.addEventListener("click", calcAge, false)

//resetting error states onfocus



function calcAge() {

    const dayInput = parseInt(document.getElementById("day-input").value)
    const monthInput = parseInt(document.getElementById("month-input").value) 
    const yearInput =  parseInt(document.getElementById("year-input").value)

    isLeapYear(yearInput)

    //calculation
    calculatedDay = currentDay - dayInput;
    calculatedMonth = currentMonth - monthInput;
    calculatedYear = currentYear - yearInput; 

    //explanation comment
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


    if((months31.includes(monthInput)) && (dayInput >= 1 && dayInput <= 31) && (yearInput < currentYear)){
        document.getElementById("year-number").innerHTML = calculatedYear
        document.getElementById("month-number").innerHTML = calculatedMonth
        document.getElementById("day-number").innerHTML = calculatedDay
        dateValid = true
    }
    else if((months30.includes(monthInput)) && (dayInput >= 1 && dayInput <= 30) && (yearInput < currentYear)){
        document.getElementById("year-number").innerHTML = calculatedYear
        document.getElementById("month-number").innerHTML = calculatedMonth
        document.getElementById("day-number").innerHTML = calculatedDay
        dateValid = true
    }
    else if((monthInput === 2) && (dayInput >= 1 && dayInput <= 28) && leapYear == false && (yearInput < currentYear)){
        document.getElementById("year-number").innerHTML = calculatedYear
        document.getElementById("month-number").innerHTML = calculatedMonth
        document.getElementById("day-number").innerHTML = calculatedDay
        dateValid = true
    }
    else if((monthInput === 2) && (dayInput >= 1 && dayInput <= 29) && leapYear == true && (yearInput < currentYear)){
        document.getElementById("year-number").innerHTML = calculatedYear
        document.getElementById("month-number").innerHTML = calculatedMonth
        document.getElementById("day-number").innerHTML = calculatedDay
        dateValid = true
    }

    //fix this lol

    if(dateValid === false){
        document.getElementsByClassName("p-error-state").style.display = "block"
        document.getElementsByClassName("p-error-state").innerHTML = "Must be a valid day"
        document.getElementById("day-input").style.borderColor = "hsl(0, 100%, 67%)"
        document.getElementById("input-label").style.color = "hsl(0, 100%, 67%)"
    }
    else if(monthInput > 12 || monthInput < 1){
        document.getElementsByClassName("p-error-state").style.display = "block"
        document.getElementsByClassName("p-error-state").innerHTML = "Must be a valid month"
        document.getElementById("month-input").style.borderColor = "hsl(0, 100%, 67%)"
        document.getElementById("input-label").style.color = "hsl(0, 100%, 67%)"
    }
    else if(yearInput > currentYear){
        document.getElementsByClassName("p-error-state").style.display = "block"
        document.getElementsByClassName("p-error-state").innerHTML = "Must be in the past"
        document.getElementById("month-input").style.borderColor = "hsl(0, 100%, 67%)"
        document.getElementById("input-label").style.color = "hsl(0, 100%, 67%)"
    }
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

}


