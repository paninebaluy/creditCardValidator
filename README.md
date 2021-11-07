# Credit Card Validator

Uses ((https://en.wikipedia.org/wiki/Luhn_algorithm Luhn algorithm)) to check validity of credit card numbers.

ES6.
List of methods:
* `validateCred (array)`: accepts an array with one credit card numbers, returns boolean. Checks validity of the credit card number by using Luhn algorithm: every second array item doubled, starting from the right; if the result has double digits, decrease it by 9 (or add digits together, same thing: sum is never higher than 18). If result modulo 10 is equal to 0, the number is valid
* `findInvalidCards (nestedArray)`: accepts a nested array of credit card numbers, returns a nested array of invalid credit card numbers
* `idInvalidCardCompanies (nestedArray)`: accepts a nested array of credit card numbers, returns an array of unique credit card company names. Intended for invalid card number nested arrays.