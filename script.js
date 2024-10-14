

const menuToggle = document.getElementById('menuToggle'); // Single menu button
const fullscreenMenu = document.getElementById('fullscreenMenu');
const menuClose = document.getElementById('menuClose');
const menuLinks = document.querySelectorAll('.fullscreen-menu ul li a');

// Toggle fullscreen menu and animate the button
menuToggle.addEventListener('click', () => {
    fullscreenMenu.classList.toggle('active'); // Use class for fade animation
    menuToggle.classList.toggle('active'); // Add this for menu icon animation
});

// Close the menu when clicking the close button
menuClose.addEventListener('click', () => {
    fullscreenMenu.classList.remove('active');
    menuToggle.classList.remove('active');
});

// Close the menu when a menu item is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        fullscreenMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});
