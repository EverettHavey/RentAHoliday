// Data for the News and Upcoming Holidays page (newsinfo.html)
const upcomingHolidays = [
    {
        date: "2025-10-01",
        name: "Universal No School Day",
        description: "A synchronized worldwide day off for students aged 7-18 to promote mental health and unstructured play. Coordinated with over 50 countries!",
        type: "World Wide"
    },
    {
        date: "2025-11-15",
        name: "Global Digital Detox",
        description: "A 48-hour period where all non-essential internet services are symbolically paused. Encourage real-world interaction.",
        type: "World Wide"
    },
    {
        date: "2025-12-24",
        name: "Private Aurora Borealis Watch",
        description: "A private, exclusive holiday for one client: guaranteed perfect viewing of the Northern Lights from a custom-built orbital platform.",
        type: "You Only"
    },
    {
        date: "2026-01-05",
        name: "First Contact Anniversary",
        description: "A day to celebrate all forms of connection and communication across cultures. Public festivals and private retreats available.",
        type: "World Wide"
    }
];

// --- Utility Functions ---

/**
 * Finds the next upcoming holiday from the list based on the current date.
 * @returns {object|null} The next holiday object or null if none are future-dated.
 */
function getNextHoliday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to start of day

    // Filter for future holidays and sort them
    const futureHolidays = upcomingHolidays
        .filter(holiday => new Date(holiday.date) >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    return futureHolidays.length > 0 ? futureHolidays[0] : null;
}

/**
 * Formats a date string (YYYY-MM-DD) into a readable format (e.g., October 1, 2025).
 * @param {string} dateString
 * @returns {string} Formatted date.
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// --- Page Specific Logic ---

/**
 * Logic for newsinfo.html
 */
function handleNewsInfoPage() {
    const nextHoliday = getNextHoliday();
    const nextHolidayDisplay = document.getElementById('nextHolidayDisplay');
    const upcomingHolidaysList = document.getElementById('upcomingHolidays');

    // 1. Display Next Holiday
    if (nextHoliday) {
        nextHolidayDisplay.innerHTML = `
            <h3>${nextHoliday.name}</h3>
            <p><strong>Date:</strong> ${formatDate(nextHoliday.date)}</p>
            <p><strong>Scope:</strong> ${nextHoliday.type}</p>
            <p>${nextHoliday.description}</p>
        `;
    } else {
        nextHolidayDisplay.innerHTML = '<p>No new holidays are currently scheduled.</p>';
    }

    // 2. Display All Upcoming Holidays
    upcomingHolidaysList.innerHTML = ''; // Clear initial loading message
    upcomingHolidays.forEach(holiday => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${formatDate(holiday.date)}:</strong> ${holiday.name} (${holiday.type}) - ${holiday.description}`;
        upcomingHolidaysList.appendChild(listItem);
    });
}

/**
 * Logic for Rent.html
 */
function handleRentalPage() {
    const rentalForm = document.getElementById('rentalForm');
    const budgetInput = document.getElementById('budget');
    const submissionMessage = document.getElementById('submissionMessage');

    // 1. Pre-fill budget based on URL parameter (from Pricing.html links)
    const urlParams = new URLSearchParams(window.location.search);
    const tier = urlParams.get('tier');
    if (tier) {
        budgetInput.value = `$${tier.toUpperCase()}`;
    }

    // 2. Form Submission Handler
    if (rentalForm) {
        rentalForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // *** WARNING: This is a placeholder for form submission and payment. ***
            // *** NEVER process real payment data with client-side JavaScript alone. ***

            // Gather form data (just for display purposes)
            const formData = new FormData(rentalForm);
            const holidayDetails = Object.fromEntries(formData.entries());

            console.log('Holiday Request Submitted:', holidayDetails);

            // Display a success message
            submissionMessage.textContent = 'Thank you! Your holiday request has been submitted for review and payment processing. A representative will contact you shortly.';
            submissionMessage.style.display = 'block';

            // Optional: Reset form after submission
            rentalForm.reset();
            budgetInput.value = '$0'; // Reset budget field manually
        });
    }
}


// --- Main Execution Block ---

document.addEventListener('DOMContentLoaded', () => {
    // Check which page is loaded and run the corresponding script
    const path = window.location.pathname;

    if (path.includes('newsinfo.html')) {
        handleNewsInfoPage();
    } else if (path.includes('Rent.html')) {
        handleRentalPage();
    }
    // Add logic for other pages if needed
});