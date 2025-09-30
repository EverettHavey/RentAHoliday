// Data for the News and Upcoming Holidays page (newsinfo.html)
const upcomingHolidays = [
    {
        date: "2025-10-01",
        name: "Universal No School Day",
        description: "A synchronized worldwide day off for students aged 7-18 to promote mental health and unstructured play. Coordinated with over 50 countries!",
        type: "World Wide",
        scope: "Public",
        image: "https://placehold.co/600x200/004d99/ffffff?text=School+Out+Day"
    },
    {
        date: "2025-11-11",
        name: "Veterans Day",
        description: "An annual United States federal holiday honoring military veterans.",
        type: "National",
        scope: "Public",
        image: "https://placehold.co/600x200/4a4e69/ffffff?text=Veterans+Day"
    },
    {
        date: "2025-11-15",
        name: "Global Digital Detox",
        description: "A 48-hour period where all non-essential internet services are symbolically paused. Encourage real-world interaction.",
        type: "World Wide",
        scope: "Public",
        image: "https://placehold.co/600x200/ff6600/ffffff?text=Digital+Detox"
    },
    {
        date: "2025-11-27",
        name: "Thanksgiving Day",
        description: "A United States federal holiday to celebrate the harvest and other blessings of the past year.",
        type: "National",
        scope: "Public",
        image: "https://placehold.co/600x200/e07a5f/ffffff?text=Thanksgiving"
    },
    {
        date: "2025-12-24",
        name: "Private Aurora Borealis Watch",
        description: "A private, exclusive holiday for one client: guaranteed perfect viewing of the Northern Lights from a custom-built orbital platform.",
        type: "You Only",
        scope: "Private",
        image: "https://placehold.co/600x200/1d3557/ffffff?text=Private+Aurora+Watch"
    },
    {
        date: "2025-12-25",
        name: "Christmas Day",
        description: "A United States federal holiday celebrating the birth of Jesus Christ.",
        type: "National",
        scope: "Public",
        image: "https://placehold.co/600x200/40916c/ffffff?text=Christmas+Day"
    },
    {
        date: "2026-01-01",
        name: "New Year's Day",
        description: "A United States federal holiday celebrating the start of the Gregorian calendar year.",
        type: "National",
        scope: "Public",
        image: "https://placehold.co/600x200/5a189a/ffffff?text=New+Years+Day"
    },
    {
        date: "2026-01-05",
        name: "First Contact Anniversary",
        description: "A day to celebrate all forms of connection and communication across cultures. Public festivals and private retreats available.",
        type: "World Wide",
        scope: "Public",
        image: "https://placehold.co/600x200/2a9d8f/ffffff?text=Contact+Anniversary"
    },
    {
        date: "2026-01-19",
        name: "M.L. King, Jr.'s Day",
        description: "A United States federal holiday marking the birthday of Martin Luther King Jr.",
        type: "National",
        scope: "Public",
        image: "https://placehold.co/600x200/0077b6/ffffff?text=MLK+Day"
    },
    {
        date: "2026-02-16",
        name: "Washington's Birthday (Presidents' Day)",
        description: "A United States federal holiday celebrating George Washington and Abraham Lincoln, often called Presidents' Day.",
        type: "National",
        scope: "Public",
        image: "https://placehold.co/600x200/03045e/ffffff?text=Presidents+Day"
    },
    {
        date: "2026-03-20",
        name: "The Equinox Reset",
        description: "A simple, private 24-hour holiday for a single corporate client focused on reorganizing workflows and strategic planning.",
        type: "Group",
        scope: "Private",
        image: "https://placehold.co/600x200/f2cc8f/ffffff?text=Equinox+Reset"
    },
    {
        date: "2026-04-07",
        name: "Global Health & Wellness Day",
        description: "A day dedicated to promoting physical and mental well-being, featuring free meditation retreats and outdoor activities.",
        type: "World Wide",
        scope: "Public",
        image: "https://placehold.co/600x200/4c9568/ffffff?text=Health+Wellness"
    },
    {
        date: "2026-05-25",
        name: "Memorial Day",
        description: "A United States federal holiday honoring the men and women who died while serving in the U.S. military.",
        type: "National",
        scope: "Public",
        image: "https://placehold.co/600x200/a41623/ffffff?text=Memorial+Day"
    },
    {
        date: "2026-06-19",
        name: "Juneteenth National Independence Day",
        description: "A United States federal holiday commemorating the emancipation of enslaved African Americans.",
        type: "National",
        scope: "Public",
        image: "https://placehold.co/600x200/3a0ca3/ffffff?text=Juneteenth"
    },
    {
        date: "2026-07-04",
        name: "Independence Day",
        description: "A United States federal holiday commemorating the Declaration of Independence.",
        type: "National",
        scope: "Public",
        image: "https://placehold.co/600x200/00b4d8/ffffff?text=Independence+Day"
    },
    {
        date: "2026-09-07",
        name: "Labor Day",
        description: "A United States federal holiday celebrating the contributions of American workers.",
        type: "National",
        scope: "Public",
        image: "https://placehold.co/600x200/007f5f/ffffff?text=Labor+Day"
    },
    {
        date: "2026-10-12",
        name: "Columbus Day",
        description: "A United States federal holiday commemorating the arrival of Christopher Columbus in the Americas.",
        type: "National",
        scope: "Public",
        image: "https://placehold.co/600x200/f77f00/ffffff?text=Columbus+Day"
    }
];

// --- Utility Functions ---

// ... (existing getNextHoliday and formatDate functions remain the same) ...

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
    // Check for valid date string to prevent errors
    if (!dateString) return 'TBD';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid Date';

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}


// --- New Calculation Logic ---

/**
 * Calculates the total cost estimate based on selected tier, duration, and compensation.
 * Note: Compensation is estimated based on 100 participants for a 'World Wide' scope.
 */
window.updateTotalAmount = function() {
    const budgetSelect = document.getElementById('budget');
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const paidCompensation = document.querySelector('input[name="paidCompensation"]:checked')?.value;
    const compensationAmountInput = document.getElementById('compensationAmount');

    // Display elements
    const baseInvestmentDisplay = document.getElementById('base-investment');
    const compensationEstimateDisplay = document.getElementById('compensation-estimate');
    const finalTotalDisplay = document.getElementById('final-total');

    // 1. Get Base Investment
    let baseInvestment = Number(budgetSelect.value) || 0;

    // 2. Calculate Duration (in days)
    let durationDays = 1; // Default to 1 day for calculation if dates are invalid
    if (startDateInput.value && endDateInput.value) {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);

        if (startDate <= endDate) {
            // Calculate difference in milliseconds, then convert to days (inclusive of start and end day)
            const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
            durationDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
        }
    }

    // 3. Calculate Compensation Estimate
    let compensationEstimate = 0;
    const participantEstimate = 100; // Placeholder estimate for 'World Wide' public holiday compensation

    if (paidCompensation === 'Yes' && compensationAmountInput.value) {
        const compPerPersonPerDay = Number(compensationAmountInput.value);
        if (compPerPersonPerDay > 0) {
            // Estimate = Compensation per person/day * Estimated Participants * Duration Days
            compensationEstimate = compPerPersonPerDay * participantEstimate * durationDays;
        }
    }

    // 4. Calculate Total
    const finalTotal = baseInvestment + compensationEstimate;

    // 5. Update Display
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    baseInvestmentDisplay.textContent = formatter.format(baseInvestment);
    compensationEstimateDisplay.textContent = formatter.format(compensationEstimate);
    finalTotalDisplay.textContent = formatter.format(finalTotal);
};


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
            <img src="${nextHoliday.image}" alt="${nextHoliday.name} concept image" style="width: 100%; max-height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;">
            <h3>${nextHoliday.name}</h3>
            <p><strong>Date:</strong> ${formatDate(nextHoliday.date)}</p>
            <p><strong>Scope:</strong> ${nextHoliday.scope} / ${nextHoliday.type}</p>
            <p>${nextHoliday.description}</p>
        `;
    } else {
        nextHolidayDisplay.innerHTML = '<p>No new holidays are currently scheduled. Check back soon!</p>';
    }

    // 2. Display All Upcoming Holidays
    upcomingHolidaysList.innerHTML = ''; // Clear initial loading message
    // Sort all holidays to display them chronologically
    const sortedHolidays = [...upcomingHolidays].sort((a, b) => new Date(a.date) - new Date(b.date));

    sortedHolidays.forEach(holiday => {
        const listItem = document.createElement('li');
        // Added image display to the list item with inline styles for layout
        listItem.innerHTML = `
            <div style="display: flex; gap: 15px; align-items: center;">
                <img src="${holiday.image}" alt="${holiday.name} icon" style="width: 60px; height: 60px; border-radius: 4px; object-fit: cover;">
                <div>
                    <strong>${formatDate(holiday.date)}:</strong>
                    ${holiday.name}
                    (<span style="color: ${holiday.scope === 'Public' ? '#ff6600' : '#004d99'}; font-weight: bold;">${holiday.scope}</span>) 
                    <br>${holiday.description}
                </div>
            </div>
        `;
        upcomingHolidaysList.appendChild(listItem);
    });
}

/**
 * Toggles the visibility of the compensation amount field based on the radio button selection.
 * This function is called directly from the onclick handlers in Rent.html.
 * @param {boolean} show If true, shows the field; otherwise, hides it.
 */
window.toggleCompensationAmount = function(show) {
    const compensationDetails = document.getElementById('compensation-details');
    if (show) {
        compensationDetails.classList.add('visible');
        document.getElementById('compensationAmount').setAttribute('required', 'required');
        document.getElementById('compensationAmount').setAttribute('min', '1');
    } else {
        compensationDetails.classList.remove('visible');
        document.getElementById('compensationAmount').removeAttribute('required');
        document.getElementById('compensationAmount').removeAttribute('min');
        document.getElementById('compensationAmount').value = 0; // Reset value
    }
    // Call calculation after toggling visibility
    updateTotalAmount();
};


/**
 * Logic for Rent.html
 */
function handleRentalPage() {
    const rentalForm = document.getElementById('rentalForm');
    const paidNoRadio = document.getElementById('paidNo');
    const submissionMessage = document.getElementById('submission-message');

    // Ensure compensation details are hidden and 'No' is selected initially
    toggleCompensationAmount(false);
    paidNoRadio.checked = true;

    // Set initial total amount display
    updateTotalAmount(); 

    // Optional: Auto-select Public scope if paid compensation is relevant
    const compensationDetails = document.getElementById('compensation-details');
    const scopeSelect = document.getElementById('scope');
    compensationDetails.addEventListener('change', (event) => {
        const target = event.target;
        // If 'Yes' is selected for compensation, suggest 'World Wide' scope if not already selected
        if (target.id === 'paidYes' && target.checked && scopeSelect.value !== 'World Wide') {
             // For simplicity, we just log a message, but you might want a custom modal here
             console.log("Compensation selected. Remember, mandatory compensation primarily applies to 'World Wide' public holidays.");
        }
    });


    // 2. Form Submission Handler
    if (rentalForm) {
        rentalForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // *** Placeholder Logic: Validate Dates and Compensation ***
            const startDate = new Date(document.getElementById('startDate').value);
            const endDate = new Date(document.getElementById('endDate').value);
            const scope = scopeSelect.value;
            const paidCompensation = document.querySelector('input[name="paidCompensation"]:checked').value;
            const compensationAmount = Number(document.getElementById('compensationAmount').value);
            const recurrence = document.getElementById('recurrence')?.value || 'Not Specified';
            const paymentOption = document.getElementById('paymentOption')?.value || 'Not Specified';
            const finalTotalText = document.getElementById('final-total').textContent; // Get the displayed total

            if (startDate > endDate) {
                submissionMessage.textContent = 'Error: The Holiday Start Date cannot be after the End Date.';
                submissionMessage.className = 'message-box error-box';
                submissionMessage.style.display = 'block';
                return;
            }

            if (paidCompensation === 'Yes' && compensationAmount <= 0) {
                 submissionMessage.textContent = 'Error: Compensation amount must be greater than $0 if selected.';
                 submissionMessage.className = 'message-box error-box';
                 submissionMessage.style.display = 'block';
                 return;
            }
            
            // --- Success Path ---
            submissionMessage.innerHTML = `
                <h3>Request Submitted!</h3>
                <p>We are analyzing your custom holiday concept (${document.getElementById('theme').value}) for feasibility.</p>
                <div style="margin-top: 10px; padding: 10px; border: 1px dashed #ccc; border-radius: 4px; background-color: #f9f9f9;">
                    <strong>Estimated Total: ${finalTotalText}</strong><br>
                    <strong>Recurrence:</strong> ${recurrence} <br>
                    <strong>Payment Method:</strong> ${paymentOption}
                </div>
                <p style="margin-top: 10px;">A final quote based on your ${scope} scope and compensation choice will be sent shortly.</p>
            `;
            submissionMessage.className = 'message-box success-box';
            submissionMessage.style.display = 'block';

            rentalForm.reset();
            updateTotalAmount(); // Reset display totals
            toggleCompensationAmount(false); // Hide compensation field again
            paidNoRadio.checked = true;
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
});
