function processData(input) {
    //Enter your code here
    let regex = /^[A-Z]([A-Z])([A-Z])([A-Z])([A-Z])([0-9])([0-9])([0-9])([0-9])([A-Z])$/
    const split = input.split('\n')
    let removed = split.shift()
    return split.map((e) => regex.test(e) ? 'YES' : 'NO')
}
console.log('Expect NO, NO, NO, YES, YES, NO, NO - Outcome: ' + processData('7\nSHZob6764U\nO2416L40S1\nb6bd8spxPY\nNSOGS5188E\nVIRDH4957S\n4dz236r2o9\n7902k89H7j'))
console.log('Expect YES, NO, NO - Outcome: ' + processData('3\nABCDS1234Y\nABAB12345Y\navCDS1234Y'))