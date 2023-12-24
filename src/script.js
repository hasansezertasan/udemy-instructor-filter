// Define a function to run on page load
function initializePage() {
    // Select the instructor profile element
    const instructorProfile = document.querySelector('div.ud-component--user-profile-instructor--instructor-profile');

    // Get the data module args attribute and parse it as JSON
    const dataModuleArgs = JSON.parse(instructorProfile.getAttribute('data-module-args'));

    // Extract the instructor ID from the parsed JSON
    const instructorId = dataModuleArgs.instructor_id;

    // Create the instructor filter URL
    const instructorFilterUrl = `https://www.udemy.com/home/my-courses/learning/?instructor_filter=${instructorId}`;

    // Select the div containing social links in the instructor profile
    const divSocialLinks = document.querySelector('div[class*="instructor-profile--social-links"]');

    // Create a link element
    const a = document.createElement('a');
    a.setAttribute('class', 'ud-btn ud-btn-large ud-btn-secondary ud-heading-md');
    a.setAttribute('href', instructorFilterUrl);
    a.setAttribute('target', '_blank');

    // Create a span element and set its inner HTML
    const span = document.createElement('span');
    span.textContent = 'Your Courses';

    // Append the span element to the link element
    a.appendChild(span);

    // Append the link element to the div containing social links
    divSocialLinks.appendChild(a);

    // Log a message indicating that the button has been added
    console.log('Udemy Instructor Filter: Your Courses button added');
}

// Add an event listener for the "load" event to trigger the initialization
window.addEventListener("load", initializePage, false);
