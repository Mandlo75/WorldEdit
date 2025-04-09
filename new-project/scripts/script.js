// Function to display an alert when called
function showWelcomeMessage() {
    alert("Welcome to the New Project!");
}

// Call the function when the page loads
window.onload = showWelcomeMessage;

// Add smooth scrolling to navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Scroll to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start'      // Align to the top of the section
            });
        }
    });
});

// Function to toggle the navigation menu
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu'); // Get the navigation menu element
    navMenu.classList.toggle('show'); // Toggle the 'show' class
}

// Add an event listener to the hamburger icon
document.getElementById('menu-toggle').addEventListener('click', toggleMenu);

// Function to filter projects by category
function filterProjects(category) {
    const projects = document.querySelectorAll('#project-list li'); // Get all projects

    projects.forEach(project => {
        // Show all projects if category is 'all'
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.classList.add('show'); // Add 'show' class to display the project
        } else {
            project.classList.remove('show'); // Remove 'show' class to hide the project
        }
    });
}

// Default: Show all projects on page load
filterProjects('all');

// Function to open the lightbox
function openLightbox(event) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // Get the full-size image URL from the clicked thumbnail
    const fullSizeImgSrc = event.target.getAttribute('data-src');
    if (fullSizeImgSrc) {
        lightboxImg.src = fullSizeImgSrc; // Set the lightbox image source
        lightbox.style.display = 'flex'; // Show the lightbox
    }
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Hide the lightbox
}

// Add event listeners to project images
document.querySelectorAll('#project-list img').forEach(img => {
    img.addEventListener('click', openLightbox);
});

// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(error => error.remove());

    // Validate Name
    if (name.value.trim() === '') {
        showError(name, 'Name is required.');
        isValid = false;
    }

    // Validate Email
    if (email.value.trim() === '') {
        showError(email, 'Email is required.');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate Message
    if (message.value.trim() === '') {
        showError(message, 'Message is required.');
        isValid = false;
    }

    // If the form is valid, submit it
    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('contact-form').reset(); // Reset the form
    }
}

// Helper function to show error messages
function showError(input, message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    input.parentNode.insertBefore(error, input.nextSibling);
}

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add event listener to the form
document.getElementById('contact-form').addEventListener('submit', validateForm);

// Simulate form submission
function simulateFormSubmission() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Fill in the form fields
    nameInput.value = 'John Doe';
    emailInput.value = 'john.doe@example.com';
    messageInput.value = 'This is a test message.';

    // Trigger the submit event
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
}

// Call the function to simulate form submission
simulateFormSubmission();

// Simulate project filtering
function simulateProjectFiltering(category) {
    // Call the filterProjects function with the desired category
    filterProjects(category);

    // Log the currently visible projects
    const visibleProjects = Array.from(document.querySelectorAll('#project-list li'))
        .filter(project => project.style.display === 'block')
        .map(project => project.textContent.trim());
    console.log(`Visible projects for category "${category}":`, visibleProjects);
}

// Simulate filtering for "Web Development"
simulateProjectFiltering('web');

// Simulate filtering for "All"
simulateProjectFiltering('all');

// Simulate navigation to a section
function simulateNavigation(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        // Scroll to the section
        section.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling
            block: 'start'      // Align to the top of the section
        });

        console.log(`Navigated to section: ${sectionId}`);
    } else {
        console.error(`Section with ID "${sectionId}" not found.`);
    }
}

// Simulate navigation to the "About Me" section
simulateNavigation('about');

// Simulate navigation to the "Projects" section
simulateNavigation('projects');

// Simulate clicking the hamburger icon
function simulateHamburgerClick() {
    const hamburgerIcon = document.getElementById('menu-toggle');

    if (hamburgerIcon) {
        // Trigger a click event on the hamburger icon
        hamburgerIcon.click();

        console.log('Hamburger icon clicked. Navigation menu toggled.');
    } else {
        console.error('Hamburger icon not found.');
    }
}

// Simulate toggling the navigation menu
simulateHamburgerClick();

// Simulate opening the lightbox
function simulateLightboxOpen() {
    const projectImage = document.querySelector('#project-list img');

    if (projectImage) {
        // Trigger a click event on the project image
        projectImage.click();

        console.log('Lightbox opened for the first project image.');
    } else {
        console.error('No project images found.');
    }
}

// Simulate opening the lightbox for the first project image
simulateLightboxOpen();

function simulateUserInteractions() {
    console.log('Simulating user interactions...');

    // Simulate form submission
    simulateFormSubmission();

    // Simulate project filtering
    simulateProjectFiltering('mobile');

    // Simulate navigation
    simulateNavigation('contact');

    // Simulate clicking the hamburger icon
    simulateHamburgerClick();

    // Simulate opening the lightbox
    simulateLightboxOpen();
}

// Call the combined simulation function
simulateUserInteractions();