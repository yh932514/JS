/*
The removeProperty function: If the object obj has a property prop, the function removes the property from the object and returns true; 
in all other cases it returns false.
  Property removed: Correct  
  Correct return value: Correct  
*/

function removeProperty(obj, prop) {
  if(prop in obj){
    delete obj[prop];
    return true;
  }
  return false;
}
