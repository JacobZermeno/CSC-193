function makeBigger() {
    alert("Hello, world!"); 
    document.getElementById("userInput").style.fontSize = "24pt";
}

function applyStyles() {
    let textArea = document.getElementById("userInput");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

function removeStyles() {
    let textArea = document.getElementById("userInput");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

function mooify() {
    let textArea = document.getElementById("userInput");
    let text = textArea.value;
    text = text.toUpperCase();
    let parts = text.split(".");
    textArea.value = parts.join("-MOO.");
}