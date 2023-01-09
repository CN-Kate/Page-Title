let dog = document.querySelector(".dog");
let drake = document.querySelector(".drake");
let h1 = document.querySelector("h1");
let wizard = document.querySelector(".Gandalf");

dog.onclick = function() {
    dog.style.display = "none";
};
wizard.onclick = function() {
    dog.style.display = "block";
};
drake.ondblclick = function() {
    drake.src = "https://media2.giphy.com/media/cL4pqu8GGRIihabgSM/giphy.gif?cid=ecf05e47o34tcic9ol8bqttfttsj9sy1c2w8bdkqwan5acfo&rid=giphy.gif&ct=g";
};

h1.onmouseover = function () {
h1.innerHTML="GREEN";
    h1.style.color="green";
};