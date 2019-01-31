/*Function appendChildren should add a new child div to each existing div. New divs should be decorated by calling decorateDiv.
  Example case: Correct answer 
  Appending divs: Correct answer 
*/

function appendChildren(decorateDivFunction) {
  var allDivs = document.getElementsByTagName("div");
  var n=allDivs.length;                       //need n = allDivs.length, because allDivs is dynamic and it's increased in each cycle
  for (var i = 0; i < n; i++) {
    var newDiv = document.createElement("div");
    decorateDivFunction(newDiv);
    allDivs[i].appendChild(newDiv);
  }
}

// Example case. 
document.body.innerHTML = `
<div id="a">
  <div id="b">
  </div>
</div>`;

//appendChildren(function(div) {});
console.log(document.body.innerHTML);
