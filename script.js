function showValue (){
    var num1 = 2
    var num2 = 8
    var resultNumber = num1 + num2
    alert("Result: " + resultNumber)
}
showValue()
function UserInfo (){
    var N1 = +prompt("Please Enter your First Number")
    var N2 = +prompt("Please Enter your Second Number")
    var N3 = +prompt("Please Enter your Third Number")
    var N4 = +prompt("Please Enter your Fourth Number")
    var N5 = +prompt("Please Enter your Fiveth Number")
    var N6 = +prompt("Please Enter your Sixth Number")
    var N7 = +prompt("Please Enter your seventh Number")
    var N8 = +prompt("Please Enter your Eighth Number")
    var Final1 = N1 * N2
    var Final2 = N3 / N4
    var Final3 = N5 - N6
    var Final4 = N7 + N8
    
 alert("Your Result is: " + Final1)
    
        alert("Your Result is: " + Final2)
    
        alert("Your Result is: " + Final3)
    
        alert("Your Result is: " + Final4)
     if (isNaN(Final1)||isNaN(Final2)||isNaN(Final3)||isNaN(Final4)){
alert("Your Result is Failed")
    }
}
UserInfo()