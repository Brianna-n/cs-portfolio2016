var makeTasks = document.getElementById("makeTasks");
var selectColor = document.getElementById("selectColor");
var submit = document.getElementById("submit");
var showTasks = document.getElementById("showTasks");

submit.addEventListener("click",function(){
    var task="<div>"+makeTasks.value+"</div>" + "<br>"
    showTasks.innerHTML= showTasks.innerHTML+task;

});

showTasks.addEventListener("click",function(evt){
    var remove= evt.target;
    remove.parentNode.removeChild(remove);
});