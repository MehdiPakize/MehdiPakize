var userBirthDate = +prompt("please Enter your Year Time ")

var userAge = 1401 - userBirthDate

if(isNaN(userAge)) {

alert("Birth Date is Not Correct")


}else if(userAge <0){

    alert("Please Enter Your Real Birth Date")

}
else{

alert("Your Age Is: " + userAge)

}