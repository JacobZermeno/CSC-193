(function() {
  "use strict";

  // wait for window to load to initialize script
  window.addEventListener("load", init);

  /**
   * initializes event listeners for the encrypt and reset buttons.
   */
  function init() {
    console.log("Window loaded!");
    
    // set up button event listeners
    document.getElementById("encrypt-it").addEventListener("click", handleClick);
    document.getElementById("reset").addEventListener("click", handleReset);
  }

  /**
   * handles the click event for the encrypt-it button.
   */
  function handleClick() {
    console.log("Button clicked!");
    let text = document.getElementById("input-text").value;
    document.getElementById("result").innerText = shiftCipher(text);
  }

  /**
   * handles the click event for the reset button by clearing the textarea.
   */
  function handleReset() {
    document.getElementById("input-text").value = "";
  }

  /**
   * returns an encrypted version of the given text by shifting 
   * letters alphabetically ahead by 1.
   */
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