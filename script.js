// set up text to print, each item in array is new line
var aText = new Array(
    "{Hello, I'm Remi, how are you?:", 
    "Delighted to meet you, I am happy to show you my page.", "Welcome to my portfolio}"
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();


    // mywork

    const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

    const timestamps = [];
    
    timestamps.unshift(getTimestamp());
    
    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function getRandomKey() {
      return keys[getRandomNumber(0, keys.length-1)]
    }
    
    function targetRandomKey() {
      const key = document.getElementById(getRandomKey());
      key.classList.add("selected");
      let start = Date.now()
    }
    
    function getTimestamp() {
      return Math.floor(Date.now() / 1000)
    }
    
    document.addEventListener("keyup", event => {
      const keyPressed = String.fromCharCode(event.keyCode);
      const keyElement = document.getElementById(keyPressed);
      const highlightedKey = document.querySelector(".selected");
      
      keyElement.classList.add("hit")
      keyElement.addEventListener('animationend', () => {
        keyElement.classList.remove("hit")
      })
      
      if (keyPressed === highlightedKey.innerHTML) {
        timestamps.unshift(getTimestamp());
        const elapsedTime = timestamps[0] - timestamps[1];
        console.log(`Character per minute ${60/elapsedTime}`)
        highlightedKey.classList.remove("selected");
        targetRandomKey();
      } 
    })
    
    targetRandomKey(); 