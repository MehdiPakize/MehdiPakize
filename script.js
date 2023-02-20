var num2 = 4
var num3 = 3

num2 * num3 === 12 ?  alert("Yes  3 time 4 = 12") : alert("No The answer is Wrong")

var N1 = 15
var N2 = 3
var N3 = 7
var N4 = 8

N1 * N2 === 45 || N3 * N4 === 56 ? alert("Your caculation is True") : alert("This is Not true")

var UserNumber1 = +prompt("Please Enter your First Number")
var UserNumber2 = +prompt("Please Enter your Second Number")

var Final = UserNumber1 * UserNumber2
UserNumber1 * UserNumber2 % 2 === 0 || UserNumber1 * UserNumber2 % 2 === 2 ? alert("Your Answer Is: "+Final ) : alert("Your Answer is Wrong")
if(isNaN(Final)){
    alert("Please Enter your Number Again")
}