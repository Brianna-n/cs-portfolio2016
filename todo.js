
//Makes each element in the HTML a variable\\
var makeTasks = document.getElementById("makeTasks");
var selectColor = document.getElementById("selectColor");
var submit = document.getElementById("submit");
var showTasks = document.getElementById("showTasks");

//Activates the button to make it appear in div and changes the color of the text that appears on the screen when selected in the dropdown\\
submit.addEventListener("click",function(){
    var change="<div style= 'color:" + selectColor.value + ";'>"+makeTasks.value +"</div>"
    showTasks.innerHTML= showTasks.innerHTML+change;
   });

//able to delete the items from the list with a click\\
showTasks.addEventListener("click",function(evt){
    var remove= evt.target;
    remove.parentNode.removeChild(remove);
});

