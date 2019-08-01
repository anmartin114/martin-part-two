var eventType = prompt("Enter event type");
var tempFahr = prompt("Enter temperature in Fahrenheit");
let suggestion1="";
let suggestion2="";

if (eventType=="casual"){
  suggestion1="something comfy";
}else if (eventType=="semi-formal"){
  suggestion1="a polo";
}else if (eventType=="formal"){
  suggestion1="a suit";
}

if (tempFahr<54){
  suggestion2="a coat";
}else if (tempFahr>70){
  suggestion2="no jacket";
}else if (tempFahr>=54 && tempFahr<=70){
  suggestion2="a jacket";
}

var result= (`since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear ${suggestion1} and ${suggestion2}`);

console.log(result);