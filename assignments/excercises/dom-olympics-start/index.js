var newHeader = document.getElementById("header");

newHeader.textContent = "JavaScript Made This!!";
newHeader.style.fontSize = "40px";
newHeader.style.textAlign = "center";

var subHeader = document.createElement("h2");
subHeader.textContent = " wrote this JavaScript";
var newHeader = document.getElementById("header");
newHeader.append(subHeader);
subHeader.style.fontSize = "30px";

var newSpan = document.createElement("span");
newSpan.textContent = "Matt Heck";
subHeader.prepend(newSpan);
newSpan.style.color = "yellow";
newSpan.style.fontSize = "30px";

var happyText = document.querySelectorAll("div.messages > div")
    // console.log(Array.from(happyText))

    for (var i = 0; i < happyText.length; i++){
        happyText[i].textContent = "this is some new positive and happy text";
    }
var btn = document.getElementById("clear-button");
btn.addEventListener('click', function handleClick(){
    var removeText = document.querySelector("div.messages")
    removeText.parentNode.removeChild(removeText);
});

