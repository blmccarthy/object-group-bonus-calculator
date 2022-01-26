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

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

let employeeBonusArray = [];

function bonusCalc(inputArray, outputArray){
  for (let i = 0; i < inputArray.length; i++){
    let ratingPercentage = 0;
    let salary = Number(inputArray[i].annualSalary); // To avoid string concat later
    
    // Establish Rating Percentages
    if (inputArray[i].reviewRating < 3){
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

    // +5% for employees w/ 15yr tenure (determined by employeeNumber)
    if (inputArray[i].employeeNumber < 10000){
      ratingPercentage += 0.05;
    }

    // -1% for employees w/ 65k+ Salary
    if (salary > 65000){
      ratingPercentage -= 0.01;      
    }

    // Enforce 0% Min, 13% Max Bonus
    if (ratingPercentage < 0){
      ratingPercentage = 0;
    }
    if (ratingPercentage > 0.13){
      ratingPercentage = 0.13;
    }

    // Push final values to array
    outputArray[i] = {
      name: inputArray[i].name,
      bonusPercentage: ratingPercentage,
      totalCompensation: salary + (salary * ratingPercentage),
      totalBonus: salary * ratingPercentage,
    }
  } // end for
} // end bonusCalc

bonusCalc(employees, employeeBonusArray);
console.log(employeeBonusArray);