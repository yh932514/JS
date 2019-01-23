/*The check digit should be calculated by adding up all digits in each membership ID. 
If the result of the sum is a number with more than a single digit, another iteration is required, and the digits of the result also should be added together. 
This process should repeat until a single-digit number is calculated.

For example, for the membership ID "55555" the sum of all digits is 25. Because this is not a single-digit number, 2 and 5 would be added, and the result, 7, 
would be the check digit.
  Example case: Correct  
  Single iteration required: Correct  
  Two iterations required: Correct  
  Multiple iterations required:   WRONG
For example, for the membership ID "55555" the sum of all digits is 25. Because this is not a single-digit number, 2 and 5 would be added, and the result, 7, would be the check digit.
*/
/**
 * @prop {string} membershipId: The customer's membership ID.
 * @return {number} The check digit.
 */
function createCheckDigit(membershipId) {
  var checkDigit=0; 
  var sid=membershipId.toString();
  var digits = sid.length;
  
  for(var i=1; i<=digits; i++){
      checkDigit += membershipId% 10;
      membershipId = parseInt(membershipId/ 10); 
  }
  if(checkDigit<10)
    return checkDigit;
  else
    return createCheckDigit(checkDigit);
}

console.log(createCheckDigit("9999999999999999999999"));
