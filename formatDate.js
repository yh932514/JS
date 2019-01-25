/*
format from M/D/YYYY to YYYYMMDD  
For example, it should convert user entered date "1/31/2014" to "20140131" suitable for the API.
Example case: Correct  
  Two-digit month and day: Correct  
  One-digit day: Correct  
  One-digit month: Correct  
*/
function formatDate(userDate) {  
  var result = "";
  for(var i=userDate.length-4; i<userDate.length; i++){
        result += userDate[i];
  }  //yyy
  
  userDate=userDate.slice(0,userDate.length-4);
  var count=0;
  
  for(var j=0; j<userDate.length; j++){
    if(userDate[j]=='/'){
      if(count ==1){
        result += '0';
        result += userDate[j-1];}
      else{
        result += userDate[j-2];
        result += userDate[j-1];}
      count=0;}
    else
      count++;
  }
  return result;
}

console.log(formatDate("1/22/2014"));
