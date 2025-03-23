const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Function to open the popup and display the clicked image
function openPopup(imgId) {
    const imgElement = document.getElementById(imgId);
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    
    // Set the image source for the popup
    popupImg.src = imgElement.src;
  
    // Display the popup
    popup.style.display = 'flex';
  }
  
  // Function to close the popup
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
  
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Hide the loading screen after 5 seconds
  setTimeout(function () {
      document.getElementById("loading-screen").classList.add("hidden");
      document.getElementById("main-content").classList.remove("hidden");
  }, 2000); // 5000ms = 5 seconds
});

// List of words to type
const words = ["Welcome", "to", "Croc Sessions."];
const typingSpeed = 150; // Speed of typing each character (ms)
const erasingSpeed = 100; // Speed of erasing each character (ms)
const delayBetweenWords = 2000; // Delay before typing the next word (ms)

let wordIndex = 0; // Tracks the current word being typed
let charIndex = 0; // Tracks the current character in the word
let isErasing = false; // Whether the text is being erased

const heading = document.querySelector(".main-heading");

function typeEffect() {
    if (!isErasing) {
        // Typing characters
        heading.textContent = words[wordIndex].substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === words[wordIndex].length) {
            // Pause before erasing
            isErasing = true;
            setTimeout(typeEffect, delayBetweenWords);
        } else {
            setTimeout(typeEffect, typingSpeed);
        }
    } else {
        // Erasing characters
        heading.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            // Move to the next word
            isErasing = false;
            wordIndex = (wordIndex + 1) % words.length; // Loop back to the first word
            charIndex = 0; // Reset character index
            setTimeout(typeEffect, typingSpeed);
        } else {
            setTimeout(typeEffect, erasingSpeed);
        }
    }
}

// Start the typing effect on page load
document.addEventListener("DOMContentLoaded", typeEffect);
