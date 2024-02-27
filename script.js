document.addEventListener('DOMContentLoaded', () => {
    // Example: Make the hidden link visible after 10 seconds (for demonstration purposes)
    setTimeout(() => {
        const hiddenLink = document.getElementById('hiddenLink');
        hiddenLink.style.visibility = 'visible';
        hiddenLink.style.height = 'auto';
    }, 10000); // 10000 milliseconds = 10 seconds
});
