// Function to toggle blur effect on main content
function toggleBlur(isBlur) {
    const mainContent = document.getElementById('mainContent');
    if (isBlur) {
        mainContent.classList.add('blurry');
    } else {
        mainContent.classList.remove('blurry');
    }
}

    // Function to show age authentication popup and blur main content on page load
    document.addEventListener('DOMContentLoaded', function() {
        const agePopup = document.getElementById('agePopup');
        agePopup.classList.add('show'); // Add 'show' class to display popup
        toggleBlur(true);// Apply blur effect on main content
    });

    // Event listener for completly loaded HTML page
    document.addEventListener('DOMContentLoaded', function() {
        const agePopup = document.getElementById('agePopup');
        agePopup.classList.add('show'); // Add 'show' class to display popup
    
        // Add event listener for Enter key on keyboardInput field
        const keyboardInput = document.getElementById('keyboardInput');
        keyboardInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                checkLetter(); // Call checkLetter function when Enter key is pressed
            }
        });
    });

// Array to store questions
const questions = [
    "What number means that we have nothing?",
    "What is the product of 6 and 3?",
    "How many sides does an octagon have?"
];

// Corresponding answers array
const answers = [
    "0",
    "18",
    "8"
];

// Function to show random question from the array
function showRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];
    document.getElementById('question').textContent = question;
    document.getElementById('answerInput').value = ''; // Clear previous answer
    const agePopup = document.getElementById('agePopup');
    agePopup.classList.add('show');
}

function checkAnswer(event) {
    // Check if the key pressed is Enter (key code 13) and call checkAnswer function
    if (event.keyCode === 13) {
        const answerInput = document.getElementById('answerInput').value.trim();
        const correctAnswer = answers[questions.indexOf(document.getElementById('question').textContent)];
    
        const feedbackMessage = document.getElementById('feedbackMessage');
    
        if (answerInput.toLowerCase() === correctAnswer.toLowerCase()) {
            feedbackMessage.innerText = 'Correct!';
            toggleBlur(false); // Remove blur effect
            document.getElementById('mainContent').style.display = 'block';
            document.getElementById('agePopup').classList.remove('show'); // Hide the agePopup
            document.getElementById('agePopup').classList.add('hide'); // Add 'hide' class to agePopup for further styling
        } else {
            // Show feedback as an external alert message
            window.alert('Incorrect. Try again!');
        }
    }
}

// Event listener for Enter key on keyboardInput field
document.addEventListener('DOMContentLoaded', function() {
const keyboardInput = document.getElementById('keyboardInput');
keyboardInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkLetter(); // Call checkLetter function when Enter key is pressed
    }
});
});

// Event listener for page load
document.addEventListener('DOMContentLoaded', function() {
showRandomQuestion();
});
    
function expandCaterpillar(letter) {
        const keyboardInput = document.getElementById('keyboardInput');
        keyboardInput.value = ''; // Clear input text
        const caterpillar = document.getElementById('caterpillar');
        const container = document.querySelector('.container');
        const letterInfo = document.getElementById('letterInfo');
        const expandedInfo = document.getElementById('expandedInfo');

        // Display expanded letter information
        letterInfo.style.display = 'block';


        let letterHeading = '';
        let letterDescription = '';
        let letterCompare = '';
        
        // Clear response message
        const feedbackMessage = document.getElementById('feedbackMessage');
        feedbackMessage.innerText = '';

    
        // Set the information based on the clicked letter
        switch (letter) {
            case 'A':
                letterHeading = 'Letter A';
                letterCompare = 'A';
                letterDescription = 'Information about letter A.';
                imageSource = '"C:/Users/Nudar/AT1_playarea/static/Apple.jpg"'; 
                videoSource = '"C:/Users/Nudar/AT1_playarea/static/A.m4a"';
                break;
            case 'B':
                letterHeading = 'Letter B';
                letterCompare = 'B';
                letterDescription = 'Information abdout letter B.';
                imageSource = '"C:/Users/Nudar/AT1_playarea/static/Ball.jpg"';
                videoSource = '"C:/Users/Nudar/AT1_playarea/static/B.m4a"';         
                break;
            case 'C':
                letterHeading = 'Letter C';
                letterCompare = 'C';
                letterDescription = 'Information about letter C.';
                imageSource = 'static/C.jpg'; 
                videoSource = 'static/C.m4a';         
                break;
            case 'D':
                letterHeading = 'Letter D';
                letterCompare = 'D';
                letterDescription = 'Information about letter D.';
                imageSource = 'static/Dog.jpg'; 
                videoSource = 'static/D.m4a';         
                break;
            case 'E':
                letterHeading = 'Letter E';
                letterCompare = 'E';
                letterDescription = 'Information about letter E.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
            case 'F':
                letterHeading = 'Letter F';
                letterCompare = 'F';
                letterDescription = 'Information about letter F.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
            case 'G':
                letterHeading = 'Letter G';
                letterCompare = 'G';
                letterDescription = 'Information about letter G.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
            case 'H':
                letterHeading = 'Letter H';
                letterCompare = 'H';
                letterDescription = 'Information about letter H.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
            case 'I':
                 letterHeading = 'Letter I';
                 letterCompare = 'I';
                 letterDescription = 'Information about letter I.';
                 imageSource = 'path_to_your_image_for_A.jpg'; 
                 videoSource = 'path_to_your_video_for_A.mp4';          
                 break;
            case 'J':
                 letterHeading = 'Letter J';
                 letterCompare = 'J';
                 letterDescription = 'Information about letter J.';
                 imageSource = 'path_to_your_image_for_A.jpg'; 
                 videoSource = 'path_to_your_video_for_A.mp4';          
                 break;
            case 'K':
                letterHeading = 'Letter K';
                letterCompare = 'K';
                letterDescription = 'Information about letter K.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
            case 'L':
                letterHeading = 'Letter L';
                letterCompare = 'L';
                letterDescription = 'Information about letter L.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
            case 'M':
                letterHeading = 'Letter M';
                letterCompare = 'M';
                letterDescription = 'Information about letter M.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
            case 'N':
                letterHeading = 'Letter N';
                letterCompare = 'N';
                letterDescription = 'Information about letter N.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
            case 'O':
                letterHeading = 'Letter O';
                letterCompare = 'O';
                letterDescription = 'Information about letter O.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
            case 'P':
                letterHeading = 'Letter P';
                letterCompare = 'P';
                letterDescription = 'Information about letter P.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
            case 'Q':
                letterHeading = 'Letter Q';
                letterCompare = 'Q';
                letterDescription = 'Information about letter Q.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
            case 'R':
                letterHeading = 'Letter R';
                letterCompare = 'R';
                letterDescription = 'Information about letter R.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
             case 'S':
                letterHeading = 'Letter S';
                letterCompare = 'S';
                letterDescription = 'Information about letter S.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
            case 'T':
                letterHeading = 'Letter T';
                letterCompare = 'T';
                letterDescription = 'Information about letter T.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
            case 'U':
                letterHeading = 'Letter U';
                letterCompare = 'U';
                letterDescription = 'Information about letter U.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
            case 'V':
                letterHeading = 'Letter V';
                letterCompare = 'V';
                letterDescription = 'Information about letter V.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
            case 'W':
                letterHeading = 'Letter W';
                letterCompare = 'W';
                letterDescription = 'Information about letter W.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
            case 'X':
                letterHeading = 'Letter X';
                letterCompare = 'X';
                letterDescription = 'Information about letter X.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
            case 'Y':
                letterHeading = 'Letter Y';
                letterCompare = 'Y';
                letterDescription = 'Information about letter Y.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
            case 'Z':
                letterHeading = 'Letter Z';
                letterCompare = 'Z';
                letterDescription = 'Information about letter Z.';
                imageSource = 'path_to_your_image_for_A.jpg'; 
                videoSource = 'path_to_your_video_for_A.mp4';         
                break;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            // Default incase one or all do/does not work
            default:
                letterHeading = 'Letter';
                letterDescription = 'Information about the selected letter.';
        }
        
        document.getElementById('letterHeading').innerText = letterHeading;
        document.getElementById('letterDescription').innerText = letterDescription;
        document.getElementById('letterCompare').innerText = letterCompare;
        document.getElementById('letterInfo').style.display = 'block';
        document.getElementById('keyboardInput').style.display = 'block'; // Show input box
    
        // Update the layout to show expanded information on the right
        container.style.display = 'flex';
        container.style.flexDirection = 'row'; /*Ensure row direction*/
        container.style.justifyContent = 'space-between' /*Space between items*/
        
        //Add a class to adjust letter width when expanded info is shown
        caterpillar.classList.add('expand-letter');

         // Show the expanded letter info panel
        document.getElementById('letterInfo').style.display = 'block';
        document.getElementById('keyboardInput').style.display = 'block'; // Show input box

        // Show the expanded letter info panel by adding the 'show-info' class
        document.querySelector('.expanded-info').classList.add('show-info');

        // Move the letter shells to the left
        container.classList.add('move-left');

        // Set the expanded letter information in the HTML elements
        document.getElementById('letterHeading').innerText = letterHeading;
        document.getElementById('letterDescription').innerText = letterDescription;

        // Show the expanded letter info panel
        container.classList.add('expanded-container');
        
        // Show the expanded letter info panel by adding the 'show-info' class
        expandedInfo.classList.add('show-info');

        // Prevent the default hover effect on shells by adding a class
        const shells = document.querySelectorAll('.shell');
        shells.forEach(shell => {
            shell.classList.add('no-hover');
        });
    }
    
    
    function checkLetter() {
        const keyboardInput = document.getElementById('keyboardInput').value.trim().toUpperCase();
        console.log(keyboardInput); // Debugging: Check keyboard input
    
        const selectedLetter = document.getElementById('letterCompare').innerText.trim().toUpperCase(); // Ensure uppercase
        console.log(selectedLetter); // Debugging: Check selected letter for comparison
    
        const feedbackMessage = document.getElementById('feedbackMessage');
    
        if (keyboardInput === selectedLetter) {
            feedbackMessage.innerText = 'Correct!';
        } else {
            feedbackMessage.innerText = 'Incorrect. Try again!';
        }
    }
