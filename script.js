//  var num1 = 3
//  var num2 = 4

//  var num3 = num1 *num2

//  switch(num3){
//  case 10 :
//      alert("Num3 = 10")
//      break;
//      case 11 : 
//      alert("Num3 = 11")
//      break;
//      case 12 :
//      case 15 :
//      alert ("Num3 = 12 or 15")
//      break;
//      case 13 : 
//      alert ("Num3 = 13")
//      break;
//      case 14 : 
//      alert ("Num3 = 14")
//      break;
//      default : alert("Num3 dont have a answer :(")
//      break;
//  }
//  var userGpa = +prompt("Please Enter your Gpa")
//  switch(userGpa){
//      case 18 :
//          case 19 :
//             case 20 :
//          alert("Your Result is A")
//         break;
//          case 15 :
//              case 16 :
//                 case 17 :
//         alert("Your Result is B")
//         break;
//         case 12:
//             case 13 : 
//              case 14 :         alert("Your Result is C")
//         break
//         case (isNaN(userGpa)):
//             alert("Please Try Again")
//              default : alert("You Failed This Term ")
//  }
var UserNomre = +prompt("Please Enter your Nomre")
if(UserNomre >17 && UserNomre <21){
alert("Your Result is A")
}else if (UserNomre > 14 && UserNomre < 18){
    alert("Your Result is B")
}else if(UserNomre > 11 && UserNomre < 15){
    alert("Your Result is C")
}else if(isNaN(UserNomre)){
    alert("Please Try Again")
}else {
    alert("You Failed This Term")
}