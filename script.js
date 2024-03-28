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
                const currentTimestamp = new Date().toISOString();  // Generates current timestamp in ISO 8601 format
                console.log(currentTimestamp);  // Output: "2024-03-28T12:30:00.000Z" (example timestamp)

            } else {
                alert('You must be at least 18 years old to access this website.');
            }
        }

        function expandCaterpillar(letter) {
            let letterHeading = '';
            let letterDescription = '';
            let letterCompare = '';
            let imageSource = ''; // Add image source
            let videoSource = ''; // Add video source        
        
            // Set the information based on the clicked letter
            switch (letter) {
                case 'A':
                    letterHeading = 'Letter A';
                    letterCompare = 'A';
                    letterDescription = 'Information about letter A.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'B':
                    letterHeading = 'Letter B';
                    letterCompare = 'B';
                    letterDescription = 'Information abdout letter B.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'C':
                    letterHeading = 'Letter C';
                    letterCompare = 'C';
                    letterDescription = 'Information about letter C.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'D':
                    letterHeading = 'Letter D';
                    letterCompare = 'D';
                    letterDescription = 'Information about letter D.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'E':
                    letterHeading = 'Letter E';
                    letterCompare = 'E';
                    letterDescription = 'Information about letter E.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'F':
                    letterHeading = 'Letter F';
                    letterCompare = 'F';
                    letterDescription = 'Information about letter F.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'G':
                    letterHeading = 'Letter G';
                    letterCompare = 'G';
                    letterDescription = 'Information about letter G.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'H':
                    letterHeading = 'Letter H';
                    letterCompare = 'H';
                    letterDescription = 'Information about letter H.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'I':
                     letterHeading = 'Letter I';
                     letterCompare = 'I';
                     letterDescription = 'Information about letter I.';
                     imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                     videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A         
                     break;
                case 'J':
                     letterHeading = 'Letter J';
                     letterCompare = 'J';
                     letterDescription = 'Information about letter J.';
                     imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                     videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A         
                     break;
                case 'K':
                    letterHeading = 'Letter K';
                    letterCompare = 'K';
                    letterDescription = 'Information about letter K.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'L':
                    letterHeading = 'Letter L';
                    letterCompare = 'L';
                    letterDescription = 'Information about letter L.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'M':
                    letterHeading = 'Letter M';
                    letterCompare = 'M';
                    letterDescription = 'Information about letter M.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'N':
                    letterHeading = 'Letter N';
                    letterCompare = 'N';
                    letterDescription = 'Information about letter N.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'O':
                    letterHeading = 'Letter O';
                    letterCompare = 'O';
                    letterDescription = 'Information about letter O.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'P':
                    letterHeading = 'Letter P';
                    letterCompare = 'P';
                    letterDescription = 'Information about letter P.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'Q':
                    letterHeading = 'Letter Q';
                    letterCompare = 'Q';
                    letterDescription = 'Information about letter Q.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'R':
                    letterHeading = 'Letter R';
                    letterCompare = 'R';
                    letterDescription = 'Information about letter R.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                 case 'S':
                    letterHeading = 'Letter S';
                    letterCompare = 'S';
                    letterDescription = 'Information about letter S.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'T':
                    letterHeading = 'Letter T';
                    letterCompare = 'T';
                    letterDescription = 'Information about letter T.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'U':
                    letterHeading = 'Letter U';
                    letterCompare = 'U';
                    letterDescription = 'Information about letter U.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'V':
                    letterHeading = 'Letter V';
                    letterCompare = 'V';
                    letterDescription = 'Information about letter V.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'W':
                    letterHeading = 'Letter W';
                    letterCompare = 'W';
                    letterDescription = 'Information about letter W.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'X':
                    letterHeading = 'Letter X';
                    letterCompare = 'X';
                    letterDescription = 'Information about letter X.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'Y':
                    letterHeading = 'Letter Y';
                    letterCompare = 'Y';
                    letterDescription = 'Information about letter Y.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                case 'Z':
                    letterHeading = 'Letter Z';
                    letterCompare = 'Z';
                    letterDescription = 'Information about letter Z.';
                    imageSource = 'path_to_your_image_for_A.jpg'; // Add image source for letter A
                    videoSource = 'path_to_your_video_for_A.mp4'; // Add video source for letter A        
                    break;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                // Add more cases for other letters as needed
                default:
                    letterHeading = 'Letter';
                    letterDescription = 'Information about the selected letter.';
            }
            
            document.getElementById('letterHeading').innerText = letterHeading;
            document.getElementById('letterDescription').innerText = letterDescription;
            document.getElementById('letterCompare').innerText = letterCompare;
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