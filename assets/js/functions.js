// Select the button and the root element
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const rootElement = document.documentElement;

// Function to toggle the theme
function toggleTheme(event) {
  event.preventDefault(); // Prevent the default behavior of the `a` tag

  if (rootElement.classList.contains('light-theme')) {
    rootElement.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark'); // Save preference to local storage
  } else {
    rootElement.classList.add('light-theme');
    localStorage.setItem('theme', 'light'); // Save preference to local storage
  }
}

// Add event listener to the button
themeToggleBtn.addEventListener('click', toggleTheme);

// Initialize theme based on saved preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  rootElement.classList.add('light-theme');
}

// Function to show/hide the button based on scroll position
const toggleButtonVisibility = () => {
  if (window.scrollY > 100) {
    themeToggleBtn.classList.add('active'); // Show the button when scrolling down
  } else {
    themeToggleBtn.classList.remove('active'); // Hide the button when at the top
  }
};

// Listen for scroll events
window.addEventListener('scroll', toggleButtonVisibility);

// Initialize the visibility state
toggleButtonVisibility();
