(function() {
  "use strict";

  // wait for window to load to initialize script
  window.addEventListener("load", init);

  function init() {
    console.log("Window loaded!");
    
    // set up button event listeners
    document.getElementById("encrypt-it").addEventListener("click", handleClick);
    document.getElementById("reset").addEventListener("click", handleReset);
  }

  // handle encryption logic
  function handleClick() {
    console.log("Button clicked!");
    let text = document.getElementById("input-text").value;
    document.getElementById("result").innerText = shiftCipher(text);
  }

  // clear the input text area
  function handleReset() {
    document.getElementById("input-text").value = "";
  }

  // shift characters by 1 (a -> b, z -> a)
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }
})();