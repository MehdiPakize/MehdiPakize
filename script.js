// ye meghdari ro az karbari migirim ke agar meghdaresh ba meghdar user name/. barabar bood is login beshe true/y/ function welcome run beshe, agar barabar nabood function try again anjam beshe
 var UserName = "ali"
 var isLogin = false
 var password = 123

 var User = prompt("Please Enter Your Number")

``
 function userNameValidation (userInputValidationFunction){
 // baresi vorudi username//.

 if(userInputValidationFunction == true){
   isLogin = true

   PassWordValidation()
 }else{
   isLogin = false
 }
 }


 function PassWordValidation (){
 // baresi dorost budan password.y.
   var UserPassword = +prompt("Please Enter Your PassWord")
 if(UserPassword == password){
 successLogin()
 }else{
   BlockLogin()
 }
 }


 function successLogin (){
 // movafaghiat haye user///
 alert("Your Login is successfull")
 }



 function BlockLogin (){
 // failed dadan login././/.
 alert("Afghani PassWord Eshtebahe")
 }


 let CheckisLoginValidation = (Value,Valuetarget) => {
    //,
 var isLoginValue = null
 if(Value==Valuetarget){
 isLoginValue = true
 }else{
   isLoginValue = false
 }
 return isLoginValue
 }

 userNameValidation (CheckisLoginValidation(User,UserName))