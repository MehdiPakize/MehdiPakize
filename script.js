var showValue = function (){
    var num1 = 2
    var num2 = 8 
    var resultNumber = num1 + num2
    alert("Your Result is: " + resultNumber)
}
var sayHi = function(){
    alert("Hi Good Afternoon :) <3")
}
showValue()
sayHi()

var UserAge = function(){
   var userSen = +prompt("Please Enter Your Age")
   if (userSen < 18){
    alert("You Dont Have Permission")
   }else if(isNaN(userSen)){
    alert("Please Try Again ")
   }else {
    alert(userSen)
   }
}
UserAge()