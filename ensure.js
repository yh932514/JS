/*
Implement the ensure function so that it throws an error if called without arguments or the argument is undefined. 
Otherwise it should return the given value.
requirement:
  No argument throws an error: Correct
  Truthy argument returns argument: Correct
  Falsy argument is treated differently from undefined: Incorrect 
*/

function ensure(value) {
  if(value != undefined || value != NULL)
    return value;
  else Error('I was created using a function call!');
    
}
