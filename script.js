 var Num1 = +prompt("Please Enter your First Number")
var Num2 = +prompt("Please Enter your Second Number")

var Total = Num1 * Num2

 if(Total < 0 ){

  alert("Your Answer is Under 0 Please Enter Another one")

 }
 else if(isNaN(Total)){
    alert("Please Enter Real Number")
 }else{
 alert("Your Final Answer is: " + Total) } 
// OR || یا
// true || true => true
// true || false =>true
// false || false => false 

var num1 = 12
var num2 = 4
var num3 = 3

if(num1 * num3 === 10 || num1 * num3 === 11){
    alert("Your Answer is 10 Or 11")
} else if (num2 * num3 === 13 || num1 * num3 === 15){
alert("Your Answer is 13 Or 15")
}else if(num2 * num3 === 14 || num2 * num3 === 12) {
alert("Your Answer is 12 Or 14")
}
//////////////////////

