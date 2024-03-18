// Function to show age authentication popup and blur main content on page load
document.addEventListener('DOMContentLoaded', function() {
    const agePopup = document.getElementById('agePopup');
    agePopup.classList.add('show'); // Add 'show' class to display popup
    document.body.classList.add('blurry'); // Apply blur to main content

    // Add event listener for "Verify" button click
    const verifyButton = document.getElementById('verifyButton');
    verifyButton.addEventListener('click', authenticateParent);
});

// Function to authenticate parent's age
function authenticateParent() {
    const parentAgeInput = document.getElementById('parentAgeInput');
    const parentAge = parseInt(parentAgeInput.value);

    if (parentAge >= 18) {
        const agePopup = document.getElementById('agePopup');
        agePopup.classList.remove('show'); // Remove 'show' class to hide popup
        document.body.classList.remove('blurry'); // Remove blur from main content
        document.getElementById('mainContent').style.display = 'block'; // Show the main content
    } else {
        alert('You must be at least 18 years old to access this website.');
    }
}

// Caterpillar Interaction
function expandCaterpillar(letter) {
    document.getElementById('letterHeading').innerText = `Letter: ${letter}`;
    document.getElementById('letterDescription').innerText = `Information about letter ${letter}`;
    document.getElementById('letterInfo').style.display = 'block';
}

// Letter Checking
function checkLetter() {
    const keyboardInput = document.getElementById('keyboardInput').value.toUpperCase();
    const selectedLetter = document.getElementById('letterHeading').innerText.split(': ')[1];

    if (keyboardInput === selectedLetter) {
        document.getElementById('feedbackMessage').innerText = 'Correct!';
    } else {
        document.getElementById('feedbackMessage').innerText = 'Incorrect. Try again!';
    }
}
