var userTime = Number(prompt("Please Enter Your Chosen Time"))

var Time = userTime / 60

if(isNaN(Time)){

 alert("Please Enter Your Time Again")

} else{

    alert("Your Time is: "+Time + " Hour")

}

var UserBirthDate = Number(prompt("Please Enter Your Year Time", 1385))

var UserAge = 1401 - UserBirthDate

if(isNaN(UserBirthDate)) {
    
    alert("Please Enter Your True Birth Date like: 1385")

  }else if(UserAge <0){

      alert("This Date is Not Correct")
    }
    else{
        
        alert("Your Birth Date is: " + UserAge)
}
