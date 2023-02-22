  function ShowText(usertext) {
  alert("Your Parameter is: " + usertext)
  }
  ShowText("SabzLearn.ir 0_0")
 function showTwoNumbers (firstNumber, secondNumber){
     alert("First Parameter: " + firstNumber)
     alert("Second Parameter: " + secondNumber)
 }
 showTwoNumbers(34 , 18)
/////////////////////

function userShowNumber (UserNumber){
   var UserNumber = +prompt("Please Enter Your Number")
   if(UserNumber % 2 === 0){
    alert("Your Number is: " + UserNumber + " Even Number")
   }else if (UserNumber % 2 === 1) {
    alert("Your Number is: " + UserNumber + " Odd Number")
   }else {
    alert("Maybe This is Not A Number Pleas Try Again")
   }
}
userShowNumber("UserNumber")
