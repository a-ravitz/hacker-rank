//naive solution

function getDayName(dateString) {
    let dayName;
    let date = new Date(dateString).toDateString()
    let dArr = date.split(" ")

    switch (dArr[0]) {
        case 'Sun':
            dayName = 'Sunday'
            break;
        case 'Mon':
            dayName = 'Monday'
            break;
        case 'Tue':
            dayName = 'Tuesday'
            break;
        case 'Wed':
            dayName = 'Wednesday'
            break;
        case 'Thu':
            dayName = 'Thursday'
            break;
        case 'Fri':
            dayName = 'Friday'
            break;
        case 'Sat':
            dayName = 'Saturday'
            break;
    }
    
    return dayName;
}

//better solution

getDayName2 = (dateString) => {
    let dayName;
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']

    dayName = days[new Date(dateString).getDay()]

    return dayName
}

console.log(getDayName('10/11/2009'))
console.log(getDayName2('10/12/2009'))