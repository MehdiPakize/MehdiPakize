var userNumber = prompt("Enter your Number: ", 0)

if (userNumber % 2 == 0) {
    
alert("Yes It Is A EvenNumber" )
} else{

   alert("No It Is A OddNumber" )

}
var userString = prompt("Enter your Name: ")

console.log(typeof userString)
if(typeof userString === "string") {

alert("Your Name is Correct")

} else {

    alert("This It Not A Name.\n Maybe It is A Number \n Please Check Your Name Again")

}
var userNumber1 = +prompt("Enter your Number: ", 0)
var userNumber2 = +prompt("Enter your Number: ", 0)
var userNumber3 = +prompt("Enter your Number: ", 0)


 var Sum = userNumber1+userNumber2+userNumber3
 var Final=Sum / 3

 alert(Final)