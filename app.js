                        //Assignment no 9

                        //Question no 1
//Write a program that displays current date and time in your browser.

var time = new Date();
console.log(time);

                        //Question no 2
//Write a program that alerts the current month in words.

var monthNames = ["jan", "feb", "march", "april", "may", "jun", "july","aug","sep","oct","nov","dec"];
var now = new Date();
var theDay = now.getMonth();
var nameOfToday = monthNames[theDay];
console.log( "Current month is: " + nameOfToday);

                        //Question no 3
//Write a program that alerts the first 3 letters of the current day, for example if today is Sunday 
//then alert will show Sun.

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
console.log("Today is: " + nameOfToday);


                        //Question no 4
//Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
for(var i = 0; i<dayNames.length;i++){
    if(dayNames[i] === "sun" || "sat"){
        console.log("It's Fun day")
        break
    }
}

                        //Question no 5
// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

var time = new Date();
var day = time.getDate();
console.log(day)
if(day <= 15){
    console.log("First fifteen Day")
}
if(day > 15){
    console.log("Last fifteen Day")
}

                        //Question no 6 
// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.


var todey=new Date()
var mili=new Date().getTime()
var minutes=mili/(1000*60*60)
console.log("Current Date: " + todey)
console.log("Elapsed millisecond since January 1, 1970: " + mili )
console.log("Elapsed minutes since January 1, 1970: " + minutes)

                        //Question no 7
//Write a program that tests whether it's before noon and alert “Its AM” else “its PM”


var hour = new Date();
var range = hour.getHours()
console.log(range);
if(range >= 0 && range <= 11){
    console.log("It's AM")
}
else{
    console.log("It's PM")
}

                        //Question no 8
// Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var laterDate = new Date("31 dec,2020")
console.log(laterDate)

                        //Question no 9
// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

var date = new Date();
console.log("Current date: " + date);
var pastdate = new Date("july 6,1922 11:57:43")
console.log("100 years ago: " + pastdate)


                        //Question no 10
// Write a program to ask the user about his age. Calculate and show his birth year in your browser.

var age = +prompt("enter your Birth year");
console.log("your Birth year is: " + age)
var year = new Date().getFullYear();
console.log("current year: " + year);
var total = year - age;
console.log("Your age is: " + total)


                        //Question no 11
// Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where, Net Amount Payable (within Due Date) = Number of units * Charges per unit 
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


console.log("K-ELECTRIC BILL")
var customer_name = prompt("enter your name");
var month = new Date().getMonth();
var unit = +prompt("enter your bill units")
var charges_per_unit = 16;

var amount = charges_per_unit * unit;
var extra_amount = 350;
var late_amount = extra_amount + amount;

console.log("Customer Name is: " + customer_name);
console.log("current Month is: " + month);
console.log("Number of units is: " + unit);
console.log("Charges per unit: " + charges_per_unit)
console.log("Net Amount Payable (within Due Date): " + amount )
console.log("Late payment charges: " + extra_amount)
console.log("Gross Amount Payable (after Due Date): " + late_amount)

                        //Question no 12
// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser

var date = new Date();
console.log("Current date: " + date);
var next = new Date("july 6,2022 18:28");
console.log("1 Hour ago, it was: " + next)

                        //Question no 13
// Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var today = new Date();
var firstDayEid = new Date("june 18,2015")
var diff =   today.getTime() - firstDayEid.getTime() 
console.log((Math.floor(diff/(1000 * 60 * 60 * 24))) + " Days have passed since 1st Ramadan 2015")


                        //Question no 14
// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var dec = new Date("dec 5,2015 22:50:43");
console.log("On reference date: " + dec)
var today = new Date()
var diff =   today.getTime() - dec.getTime()
console.log(Math.floor(diff/(1000)) + " seconds had passed since beginning of 2015.") 