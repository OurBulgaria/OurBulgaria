let name = window.prompt("Как се казвате?");
name1 = "Здравейте!<br>" + name + "<br>Добре дошли<br>в Нашата България!";
document.getElementById("myLabel").innerHTML = name1;

while(name == ""){
    name = window.prompt("Как се казвате?");
}
