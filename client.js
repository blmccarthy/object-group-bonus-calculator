const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

let employeeBonusArray = [];

function bonusCalc(inputArray, outputArray){
  for (let i = 0; i < inputArray.length; i++){
    let ratingPercentage = 0;
    if (inputArray[i].reviewRating < 3){
      finalPercentage = 0;
      ratingPercentage = 0;
    }
    if (inputArray[i].reviewRating === 3){
      ratingPercentage = 0.04;
    }
    if (inputArray[i].reviewRating === 4){
      ratingPercentage = 0.06;
    }
    if (inputArray[i].reviewRating === 5){
      ratingPercentage = 0.10;
    }
    if (inputArray[i].employeeNumber < 10000){
      ratingPercentage += 0.05;
    }
    if (inputArray[i].annualSalary > 65000){
      ratingPercentage -= 0.01;
    }
    if (ratingPercentage < 0){
      ratingPercentage = 0;
    }
    if (ratingPercentage > 0.13){
      ratingPercentage = 0.13;
    }
    // console.log('annual salary:', Number(inputArray[i].annualSalary));
    // console.log('bonus:', inputArray[i].annualSalary * ratingPercentage);
    
    outputArray[i] = {
      name: inputArray[i].name,
      bonusPercentage: ratingPercentage,
      totalCompensation: Number(inputArray[i].annualSalary + (inputArray[i].annualSalary * ratingPercentage)),
      totalBonus: Number(inputArray[i].annualSalary * ratingPercentage),
    }
  }
}

bonusCalc(employees, employeeBonusArray);
console.log(employeeBonusArray);

// function bonusCalc() {
//   reviewCalc();
//   // employeeNumberCalc(array);
// }

// function reviewCalc(){
//   let ratingPercentage = 0;
//   let finalBonus = 0;
//   for (let employee of employees){
//     let bonus = {
//       name:
//     }
//     if (employee.reviewRating < 3){
//       ratingPercentage = 0;
//       bonus. = {
//         annualSalary * ratingPercentage,
//       }
//     }
//     if (employee.reviewRating === 3 ){
//       ratingPercentage = 0.04;
//       employee = {
//         bonusAmount: employee.annualSalary * ratingPercentage,
//       }
//     }
//     if (employee.reviewRating === 4 ){
//       ratingPercentage = 0.06;
//       employee = {
//         bonusAmount: employee.annualSalary * ratingPercentage,
//       }
//     }
//     if (employee.reviewRating === 5 ){
//       ratingPercentage = 0.10;
//       employee = {
//         bonusAmount: employee.annualSalary * ratingPercentage,
//       }
//     }
//   }
// }


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.