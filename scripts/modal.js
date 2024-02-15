// Show modal
const showModal = () => {
    document.getElementById('modal').style.display = 'block';
};

// Close modal
const closeModal = () => {
    document.getElementById('modal').style.display = 'none';
};

// Toggle between sign-in and sign-up views
const toggleView = () => {
    const signInView = document.getElementById('part1');
    const signUpView = document.getElementById('part2');
    if (signInView.style.display === 'none') {
        signInView.style.display = 'block';
        signUpView.style.display = 'none';
    } else {
        signInView.style.display = 'none';
        signUpView.style.display = 'block';
    }
};

// Event listener for the Get Started button
document.querySelector('.get-started-button').addEventListener('click', showModal);

// Event listener for the close button
document.querySelector('.close').addEventListener('click', closeModal);

// Event listener for clicks outside the modal
window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('modal')) {
        closeModal();
    }
});

// Event listeners for switching between sign-in and sign-up views
document.getElementById('transmit').addEventListener('click', toggleView);
document.getElementById('transmit1').addEventListener('click', toggleView);
