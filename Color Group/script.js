// Get all elements with the class name "color-box-container"
let colorBoxes = document.getElementsByClassName("colors");

let generateButton = document.getElementById("generate-button");

const maxValue = 256; 

let colorname = document.getElementsByClassName("color-name");

// Adding an event listener to the button that listens for a click event
generateButton.addEventListener("click", generateColor);

// Function for generating a random color
function generateColor() {

  for (let i = 0; i < colorBoxes.length; i++) {
    let red = Math.floor(Math.random() * maxValue);
    let green = Math.floor(Math.random() * maxValue);
    let blue = Math.floor(Math.random() * maxValue);

    colorBoxes[i].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

     // Converting decimal values to hexadecimal representation if needed
     let redHex = red.toString(16).padStart(2, '0');
     let greenHex = green.toString(16).padStart(2, '0');
     let blueHex = blue.toString(16).padStart(2, '0');
     let hexColor = '#' + redHex + greenHex + blueHex;
    
     colorname[i].innerHTML=hexColor;
    }
  }

  document.querySelectorAll('.color-box').forEach(function(box) {
    box.addEventListener('click', function() {
        // Geting the hex code of the color
        var hexCode = this.querySelector('.color-name').textContent;

        // Using the Clipboard API to copy the hex code
        navigator.clipboard.writeText(hexCode)
            .then(function() {
                // Show the custom alert
                var customAlert = document.getElementById('customAlert');
                customAlert.style.display = 'block';
                customAlert.style.opacity = '1';
                
                // Hide the custom alert after 1 second
                setTimeout(function() {
                    customAlert.style.display = 'none';
                }, 1100);
            })

            .catch(function(err) {
                console.error('Failed to copy hex code: ', err);
            });
    });
});

 
  

