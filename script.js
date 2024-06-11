// Get the 'yes' and 'no' buttons
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

// Add event listeners to the buttons
yesButton.addEventListener('click', function() {
    console.log("Your boyfriend clicked 'Yes'");
    storeFinalChoice('Yes');
});

noButton.addEventListener('click', function() {
    console.log("Your boyfriend clicked 'No'");
    storeFinalChoice('No');
});

// Function to store the final choice in local storage
function storeFinalChoice(choice) {
    localStorage.setItem('finalChoice', choice);
}

// Function to retrieve the final choice from local storage
function getFinalChoice() {
    return localStorage.getItem('finalChoice');
}

// Example usage of retrieving the final choice (e.g., for debugging or display purposes)
document.addEventListener('DOMContentLoaded', (event) => {
    const finalChoice = getFinalChoice();
    if (finalChoice) {
        console.log('Final choice:', finalChoice);  // Display in the console for now
    }
});
