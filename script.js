        // Function to show age authentication popup and blur main content on page load
        document.addEventListener('DOMContentLoaded', function() {
            const agePopup = document.getElementById('agePopup');
            agePopup.classList.add('show'); // Add 'show' class to display popup
        });

        // Function to authenticate parent's age
        function authenticateParent() {
            const parentAgeInput = document.getElementById('parentAgeInput');
            const parentAge = parseInt(parentAgeInput.value);

            if (parentAge >= 18) {
                const agePopup = document.getElementById('agePopup');
                agePopup.style.display = 'none'; // Hide age verification popup
                document.getElementById('mainContent').style.display = 'block'; // Show the main content
            } else {
                alert('You must be at least 18 years old to access this website.');
            }
        }

        function expandCaterpillar(letter) {
            let letterHeading = '';
            let letterDescription = '';
        
            // Set the information based on the clicked letter
            switch (letter) {
                case 'A':
                    letterHeading = 'Letter A';
                    letterCompare = 'A';
                    letterDescription = 'Information about letter A.';
                    break;
                case 'B':
                    letterHeading = 'Letter B';
                    letterCompare = 'A';
                    letterDescription = 'Information abdout letter B.';
                    break;
                case 'C':
                    letterHeading = 'Letter C';
                    letterCompare = 'B';
                    letterDescription = 'Information about letter C.';
                    break;
                case 'D':
                    letterHeading = 'Letter D';
                    letterCompare = 'D';
                    letterDescription = 'Information about letter D.';
                    break;
                case 'E':
                    letterHeading = 'Letter E';
                    letterCompare = 'E';
                    letterDescription = 'Information about letter E.';
                    break;
                case 'F':
                    letterHeading = 'Letter F';
                    letterCompare = 'F';
                    letterDescription = 'Information about letter F.';
                    break;
                case 'G':
                    letterHeading = 'Letter G';
                    letterCompare = 'G';
                    letterDescription = 'Information about letter G.';
                    break;
                case 'H':
                    letterHeading = 'Letter H';
                    letterCompare = 'H';
                    letterDescription = 'Information about letter H.';
                    break;
                case 'I':
                     letterHeading = 'Letter I';
                     letterCompare = 'I';
                     letterDescription = 'Information about letter I.';
                     break;
                case 'J':
                     letterHeading = 'Letter J';
                     letterCompare = 'J';
                     letterDescription = 'Information about letter J.';
                     break;
                case 'K':
                    letterHeading = 'Letter K';
                    letterCompare = 'K';
                    letterDescription = 'Information about letter K.';
                    break;
                case 'L':
                    letterHeading = 'Letter L';
                    letterCompare = 'L';
                    letterDescription = 'Information about letter L.';
                    break;
                case 'M':
                    letterHeading = 'Letter M';
                    letterCompare = 'M';
                    letterDescription = 'Information about letter M.';
                    break;
                case 'N':
                    letterHeading = 'Letter N';
                    letterCompare = 'N';
                    letterDescription = 'Information about letter N.';
                    break;
                case 'O':
                    letterHeading = 'Letter O';
                    letterCompare = 'O';
                    letterDescription = 'Information about letter O.';
                    break;
                case 'P':
                    letterHeading = 'Letter P';
                    letterCompare = 'P';
                    letterDescription = 'Information about letter P.';
                    break;
                case 'Q':
                    letterHeading = 'Letter Q';
                    letterCompare = 'Q';
                    letterDescription = 'Information about letter Q.';
                    break;
                case 'R':
                    letterHeading = 'Letter R';
                    letterCompare = 'R';
                    letterDescription = 'Information about letter R.';
                    break;
                 case 'S':
                    letterHeading = 'Letter S';
                    letterCompare = 'S';
                    letterDescription = 'Information about letter S.';
                    break;
                case 'T':
                    letterHeading = 'Letter T';
                    letterDescription = 'Information about letter T.';
                    break;
                case 'U':
                    letterHeading = 'Letter U';
                    letterCompare = 'U';
                    letterDescription = 'Information about letter U.';
                    break;
                case 'V':
                    letterHeading = 'Letter V';
                    letterDescription = 'Information about letter V.';
                    break;
                case 'W':
                    letterHeading = 'Letter W';
                    letterDescription = 'Information about letter W.';
                    break;
                case 'X':
                    letterHeading = 'Letter X';
                    letterDescription = 'Information about letter X.';
                    break;
                case 'Y':
                    letterHeading = 'Letter Y';
                    letterDescription = 'Information about letter Y.';
                    break;
                case 'Z':
                    letterHeading = 'Letter Z';
                    letterDescription = 'Information about letter Z.';
                    break;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                // Add more cases for other letters as needed
                default:
                    letterHeading = 'Letter';
                    letterDescription = 'Information about the selected letter.';
            }
            
            document.getElementById('letterHeading').innerText = letterHeading;
            document.getElementById('letterDescription').innerText = letterDescription;
            document.getElementById('letterInfo').style.display = 'block';
            document.getElementById('keyboardInput').style.display = 'block'; // Show input box
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