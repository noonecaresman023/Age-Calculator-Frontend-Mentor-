//The user will enter the date that they were born in and this script will calculate how old they are today (at the current date)

let leapYear = false
const currentDate = new Date()
let currentDay = currentDate.getDate()
let currentMonth = currentDate.getMonth() + 1
let currentYear = currentDate.getUTCFullYear()
let months31 = [1,3,5,7,8,10,12]
let months30 = [4,6,9,11]
let calculatedDay;
let calculatedMonth;
let calculatedYear;

const btn = document.getElementById("calc-btn")

btn.addEventListener("click", calcAge, false)

//if no date has been entered but button is clicked, "This field is required"
//when user enters less than 1 for dayInput message popup "Must be a valid day"
//when user enters a value above 12 for monthInput message popup "Must be a valid month"
//when user enters a year above for yearInput then message pop up "Must be in the past"

//when user enters the date today message pop up "Welcome to the world"
//if user enters a leap year and the month that they entered is february which is 2 then they would be able to enter 29 instead of only until 28 days

//if the user enters a date that doesn't actually exist message popup "Must be a valid date"

//animate the changes




function calcAge() {

    const dayInput = parseInt(document.getElementById("day-input").value)
    const monthInput = parseInt(document.getElementById("month-input").value) 
    const yearInput =  parseInt(document.getElementById("year-input").value)

    isLeapYear(yearInput)

    calculatedDay = currentDay - dayInput;
    calculatedMonth = currentMonth - monthInput;
    calculatedYear = currentYear - yearInput;
    
    if()

    // if(dayInput === currentDay && monthInput === currentMonth && yearInput === currentYear){
    //     console.log("Welcome to the world!")
    // }
    // else if(dayInput){
    //     alert("no")
    // }

    // if(monthInput == 2 && leapYear === true){
    //     alert("nice")
    // }
    // else{
    //     alert("no")
    // }

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


//debugging
console.log("everything is good!")
