function gradingStudents(grades) {
  let finalGrades = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      finalGrades.push(grades[i]);
    } else {
      if ((grades[i] + 1) % 5 === 0) {
        finalGrades.push(grades[i] + 1);
      } else if ((grades[i] + 2) % 5 === 0) {
        finalGrades.push(grades[i] + 2);
      } else {
        finalGrades.push(grades[i]);
      }
    }
  }
  return finalGrades;
}
console.log(gradingStudents([73, 67, 38, 33]));
