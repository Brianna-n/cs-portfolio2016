
//creates variables and elements so that we can interact with them\\
var bgColor = document.getElementById("bgColor");
var colorButton =document.getElementById("colorButton");


//activates the color changer button to carry out its function by changing the style, more specifically the background color\\
colorButton.addEventListener("click", function(){
    document.body.style.backgroundColor = bgColor.value;
});

//creates variables for the calculator so that they can be identified and manipulated\\
var numberInput = document.getElementById("numberInput");
var numberInput2 = document.getElementById("numberInput2");
var operations = document.getElementById("operations");
var equals = document.getElementById("equals");
var displayAnswer =document.getElementById("displayAnswer");

//activates the equals button so that we can get the calculator to solve what is in the inputs\\
equals.addEventListener("click", solve);

//tells the computer what "solve" is; this is what to do when the user clicks the "equals" button\\
function solve(){
    if(operations.value === "+"){ //it finds the answer by parsing the integer/the value typed in the first input and adds it to the value typed into the second input; then puts the answer into the div\\
        answer=parseInt(numberInput.value)+parseInt(numberInput2.value);
        displayAnswer.innerHTML= answer;
    }
    if(operations.value === "-"){ //finds the answer by parsing the integers/the value typed in the first input and SUBTRACTS it from the value typed into the second input; then puts the answer into the div\\ 
        answer=parseInt(numberInput.value)-parseInt(numberInput2.value);
        displayAnswer.innerHTML= answer;
    }
    if(operations.value === "*"){ //finds the answer by parsing integers/values typed into the inputs then multiplies them by each other and shows the answer in the div\\
        answer=parseInt(numberInput.value)*parseInt(numberInput2.value);
        displayAnswer.innerHTML= answer;
    }
    if(operations.value === "/"){ //finds the answer by parsing integers/values typed into the inputs then divides them by each other and shoes the answer in the div\\
        answer=parseInt(numberInput.value)/ parseInt(numberInput2.value);
        displayAnswer.innerHTML=answer;
    }
    if(operations.value === "^"){ //Takes the first input and then raises the second input as power of the first then displays answer in the div\\ 
        displayAnswer.innerHTML= Math.pow(numberInput.value,numberInput2.value);
    }
    if(operations.value === "√"){ //Takes the square root of the first input the displays the answer; will still give the square root no matter what digit is typed into the second input, then displays answer in div\\
        displayAnswer.innerHTML=Math.sqrt(numberInput.value);
    }
 
}
