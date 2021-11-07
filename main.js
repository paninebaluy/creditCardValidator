// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];
const mystery6 = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, mystery6];
// a smaller mixed array
const mixedArr = [valid2, mystery1, valid3, mystery2, invalid1, invalid5, mystery3, mystery4, mystery5];


// Add your functions below:
export const validateCred = (arr) => {
  // returns bool using Luhn algorithm
  const copyOfArr = arr.slice();
  const doubleNumbers = (arr) => {
    /* mutates the copy of the array: every second array item doubled, 
    starting from the right.
    if the result has double digits, decrease by 9 
    (or add digits together, same thing: sum is never higher than 18) */
    for (i = arr.length - 2; i >= 0; i -= 2) {
      arr[i] = arr[i] * 2;
      if (arr[i] > 9) {
        arr[i] = arr[i] - 9;
      }
    }
    return arr;
  }
  doubleNumbers(copyOfArr);
  const sum = copyOfArr.reduce((prevValue, curValue) => prevValue + curValue);
  return sum % 10 === 0;
}

export const findInvalidCards = (nestedArr) => {
  // returns a nested array of invalid cards
  const invalidNestedArr = nestedArr.filter(arr => !validateCred(arr));
  return invalidNestedArr;
}

export const idInvalidCardCompanies = (nestedArr) => {
  // returns an array of companies with no duplicates
  const companiesArr = [];
  nestedArr.forEach(arr => {
    switch (arr[0]) {
      case 3: 
        companiesArr.push('Amex');
        break;
      case 4:
        companiesArr.push('Visa');
        break;
      case 5:
        companiesArr.push('Mastercard');
        break;
      case 6:
        companiesArr.push('Discover');
        break;
      default:
        console.log('Company not found');
    }
  });
  return Array.from(new Set(companiesArr));
}

console.log(validateCred(mystery1)); //should print false
const invArr = findInvalidCards(mixedArr);
console.log(invArr); // should print a nested array of invalid card numbers
console.log(idInvalidCardCompanies(invArr)); // should print an array of unique credit company names
console.log(idInvalidCardCompanies([invalid1])); // should print['Visa']
console.log(idInvalidCardCompanies([invalid2])); // should print ['Mastercard']
console.log(idInvalidCardCompanies([mystery6])); // should print an empty array and 'Company not found'
console.log(idInvalidCardCompanies(batch)); // should print an array of unique credit company names and 'Company not found'