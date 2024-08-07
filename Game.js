function firstalert()
{
    alert("Oh Jeez You Clicked IT")
}

function avg(num1, num2)
{
var result;
result = (num1+num2)/2.0;
document.getElementById("Average").innerHTML = "average of "+num1 + " " + num2 + " = "+ result;
}
function play()
{
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);

    document.getElementById("Die1Res").innerHTML = "die1 = " + die1;
    document.getElementById("Die2Res").innerHTML = "die2 = " + die2;
    var sum = die1 + die2;
    document.getElementById("SumRes").innerHTML = "sum = " + sum;

    if (sum == 2 || sum == 3 || sum == 4 || sum == 5 || sum == 6)
    {
        document.getElementById("FinalRes").innerHTML = "YOU LOST";
    }
    else if (sum == 8 || sum == 9 || sum == 10 || sum == 11 || sum == 12)
    {
        document.getElementById("FinalRes").innerHTML = "Winner Winner Breakfast for Dinner";
    }
    else
    {
        document.getElementById("FinalRes").innerHTML = "Try Again?";
    }
}