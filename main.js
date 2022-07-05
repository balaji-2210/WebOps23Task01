var changeText = document.getElementById("change");

var button01 = document.getElementById("button1");
button01.onclick = function(){
    changeText.innerHTML = "You've clicked button-1";
};

var button02 = document.getElementById("button2");
button02.onclick = function(){
    changeText.innerHTML = "You've clicked button-2";
};