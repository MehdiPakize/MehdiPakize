//  function sumNumbers (num1 , num2){
//    var result = num1 + num2
//    // alert("Result: " + result)
//    return result
//  }
  var sumResult = sumNumbers(2,8)

  alert("sumResult: " + sumResult) 

 var number1 = prompt("Please Enter your FirstNumber")
 var number2 = prompt("Please Enter your SecondNumber")



 function showPower (num1 ,num2){
 return num1 ** num2 
 }

 var powerResult = showPower(number1,number2)

 alert("PowerResult = " + powerResult)

 var Number1 = prompt("Please Enter your FirstNumber")
 var Number2 = prompt("Please Enter your SecondNumber")


 function UserNumber (Number1 , Number2){
 if(isNaN(Number1 && Number2)){
 alert("Please Try Again")
 }
 return Number1 / Number2
 }
 var Result = UserNumber(Number1,Number2)
 alert("Your Final Answer Is: " + Result)


 var Number2 = +prompt("Please Enter your FirstNumber")
 var Number3 = +prompt("Please Enter your SecondNumber")

 function Usernumber (Number2,Number3){
   if(isNaN(Number2&&Number3)){
     alert("Please Try Again :)")
   }
   return Number2 + Number3
 }
 var Final = Usernumber(Number2,Number3)
 alert("Your Final Answer is: " + Final)


 var UserName = prompt("Please Enter your Name ")
 var UserLastName = prompt("Please Enter your LastName ")

 function UserFullName (UserName,UserLastName){
 return UserName + UserLastName
 }
 var Finalname = UserFullName(UserName,UserLastName)
 alert(UserName + "\n" + UserLastName)
function Validating (){
    var validation = true
    return validation
}
function SumNumbers(num1,num2){
var sum = num1 + num2
if(sum > 10){
    
    Logger(Validating())
}
}
SumNumbers(8,3)
function Logger (x){
    console.log(x)
}
// agar adade karbar ba adad 20 yeki bud islogin = true agar is login true bood be ma alret kone welcome
var UserInput = +prompt("Pleaser Enter Your ID")
var islogin = false
function Validate (){
    islogin = true
    return islogin
}
function User (){
 if(UserInput == 20){
 alert("Welcome")
 }
}
User()