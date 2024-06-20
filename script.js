document.addEventListener('DOMContentLoaded', function() {
    // Function to show the popup
    function showPopup() {
        document.getElementById('overlay').style.display = 'flex';
        document.getElementById('popup').style.display = 'flex';
    }

    // Function to hide the popup
    function hidePopup() {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('popup').style.display = 'none';
    }

    // Close button functionality
    document.getElementById('closePopup').addEventListener('click', hidePopup);

    // Hide popup when clicking outside of it
    document.getElementById('overlay').addEventListener('click', hidePopup);

    // Show the popup immediately for testing
    showPopup();
});
