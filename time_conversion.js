// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. 
// Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

let time = "07:05:45PM"
let newTime = "01:40:22AM"
let moreNewTime = "12:40:22AM"
let afternoon = "12:40:22PM"

militaryTime = (s) => {
    var timeArr = s.split(":")

    if (timeArr[2].slice(2) === "PM") {

        if (timeArr[0] === "12") {
            var time = timeArr[0] + ":" + timeArr[1] + ":" + timeArr[2].substring(0, timeArr[2].length - 2)
            return time
        } else {
            var first = parseInt(timeArr[0]) + 12
            var time = first + ":" + timeArr[1] + ":" + timeArr[2].substring(0, timeArr[2].length - 2)
            return time
        }

    }  else { 

       if (timeArr[0] === "12") {
            var first = "00"
            var time = first + ":" + timeArr[1] + ":" + timeArr[2].substring(0, timeArr[2].length - 2)
            return time
       } else {
            var time = timeArr[0] + ":" + timeArr[1] + ":" + timeArr[2].substring(0, timeArr[2].length - 2)
            return time
       }

    }

    
   
}
console.log("1: " + militaryTime(time))
console.log("2: " + militaryTime(newTime))
console.log("3: " + militaryTime(moreNewTime))
console.log("4: " + militaryTime(afternoon)) 