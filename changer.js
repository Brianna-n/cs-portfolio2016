
//creates variables and elementws so that we can interact with them\\
var bgColor = document.getElementById("bgColor");
var colorButton =document.getElementById("colorButton");

colorButton.addEventListener("click", function(){
    document.body.style.backgroundColor = bgColor.value;
})
