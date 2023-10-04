// TODO Chapter # 26 - 30


// Question # 1 (a)

// var number = + prompt("Enter positive integer")
// console.log(number)

// // Question # 1 (b)

// var round = Math.round(number)
// console.log(round)

// // Question # 1 (c)

// var floor = Math.floor(number)
// console.log(floor)

// // Question # 1 (d)

// var ceil = Math.ceil(number)
// console.log(ceil)


// Question # 2 (a)

// var number = + prompt("Enter positive integer")
// console.log(number)

// // Question # 2 (b)

// var round = Math.round(number)
// console.log(round)

// // Question # 2 (c)

// var floor = Math.floor(number)
// console.log(floor)

// // Question # 2 (d)

// var ceil = Math.ceil(number)
// console.log(ceil)


// Question # 3

// var number = -4
// var absolute = Math.abs(number)
// console.log(absolute)


// Question # 4

// var result = Math.random() * 6
// var result2 = Math.floor(result) + 1
// console.log(result2)


// Question # 5

// var dice = Math.random() * 2
// var result = Math.floor(dice) + 1
// console.log(result)
// if (result === 1){
//     console.log("tails")
// }else{
//     console.log("heads")

// }


// Question # 6

// var maths = Math.random() *100
// var result = Math.floor(maths)
// console.log(result)


// Question # 7

// var weight = prompt("Enter your weight")
// var result = parseFloat(weight)
// console.log("The weight of the user is " +  result + " kilograms")


// Question # 8

// var input = +prompt("Enter number from 1 to 10")
// var number = Math.random() * 10
// var result = Math.floor(number) + 1
// console.log(result)
// if (result === input){
//     console.log("Congratulations")
// }else{
//     console.log("Try Again")

// }




// TODO Chapter # 31 - 34


// Question # 1

// var date = new Date()
// console.log(date)


// Question # 2

// var month = date.getMonth()
// var arr = [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "July",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ];
//     console.log(arr[month]);
    
// console.log(month)


// Question # 3

// var day = date.getDay()
// var array = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// console.log(array[day], day)


// Question # 4

// var day = date.getDay()
// if (day === 0 || day=== 6){
//     console.log("Its Funday")
// }else {
//     console.log("Its not Funday")
// }


// Question # 5

// var date = date.getDate()
// if(date < 16){
//     console.log("First fifteen days of the month")
// }else{
//     console.log("Last days of the month")
// }
// console.log(date)


// Question # 6

// var newDate = new Date(1970 , 0 , 1)
// var millisecondElapsed = date - newDate
// console.log(millisecondElapsed + " millisecond have been passed since 1st jan 1970")
// var timeDifference = date - newDate
// var minutesElapsed = Math.floor(timeDifference / ( 60 *1000))
// console.log(minutesElapsed + " minutes have been passed since 1st jan 1970" )


// Question # 7

// var time = date.getHours()
// if(time < 12 ){
//     console.log("Its AM")
// }else{
//     console.log("Its PM")
// }
// console.log(time)


// Question # 8

// var date2 = new Date(2020 , 11 , 31 )
// console.log("Last day " + date2)


// Question # 9

// var ramazanDate = new Date(2015 , 5 , 18)
// var timeDifference = date - ramazanDate
// var daysPassed = Math.floor(timeDifference / (24 * 60 * 60 * 1000))
// console.log(daysPassed + " days have been passed since 1st Ramazan 2015 ")



// Question # 10

// var dated = new Date(2015 , 0 , 1)
// var timeDifference = date - dated   
// var secondElapsed = Math.floor(timeDifference / 1000)   //the differece of the two dates is in milliseconds which has to be converted into seconds
// console.log(secondElapsed)


// Question # 11

// var hours = date.getHours()
// date.setHours(hours - 1) 
// console.log ("1 hour ago it was "+date)
// console.log ("Original hour is "+hours)


// Question # 12

// var year = date.getFullYear()
// date.setFullYear(year -  100)
// console.log("100 years back it was "+ date)
// console.log("Original year is " + year)


// Question # 13

// var age = + prompt("Enter your age: ")
// var currentYear = date.getFullYear()
// var birthYear = currentYear - age
// console.log(birthYear)


// Question # 14

// var costumerName = "Muhammad Haris Rahat"
// var month = "July"
// var numberOfUnits = 410
// var chargesPerUnit = 16.67
// var AmountWithinDueDate = numberOfUnits * chargesPerUnit.toFixed(0)
// var lateCharges = 350
// var AmountAfterDueDate = AmountWithinDueDate + lateCharges
// console.log("Costumer Name : " +costumerName)
// console.log("Month: " + month)
// console.log("Number Of Units : " + numberOfUnits)
// console.log("Charges Per Unit : " + chargesPerUnit)
// console.log("Payable Amount Within Due Date : "+ AmountWithinDueDate)
// console.log("Late Charges : " + lateCharges)
// console.log("Amount After Due Date : " + AmountAfterDueDate)

