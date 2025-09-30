// Data for the News and Upcoming Holidays page (newsinfo.html)
const upcomingHolidays = [
    {
        date: "2025-10-01",
        name: "Universal No School Day",
        description: "A synchronized worldwide day off for students aged 7-18 to promote mental health and unstructured play. Coordinated with over 50 countries!",
        type: "World Wide",
        scope: "Public",
        ageEligibility: "5-18", // ADDED FIELD
        image: "https://placehold.co/600x200/004d99/ffffff?text=School+Out+Day"
    },
    {
        date: "2025-11-11",
        name: "Veterans Day",
        description: "An annual United States federal holiday honoring military veterans.",
        type: "National",
        scope: "Public",
        ageEligibility: "All Ages", // ADDED FIELD
        image: "https://placehold.co/600x200/4a4e69/ffffff?text=Veterans+Day"
    },
    {
        date: "2025-11-15",
        name: "Global Digital Detox",
        description: "A 48-hour period where all non-essential internet services are symbolically paused. Encourage real-world interaction.",
        type: "World Wide",
        scope: "Public",
        ageEligibility: "18+", // ADDED FIELD
        image: "https://placehold.co/600x200/ff6600/ffffff?text=Digital+Detox"
    },
    {
        date: "2025-11-27",
        name: "Thanksgiving Day",
        description: "A United States federal holiday to celebrate the harvest and other blessings of the past year.",
        type: "National",
        scope: "Public",
        ageEligibility: "All Ages", // ADDED FIELD
        image: "https://placehold.co/600x200/e07a5f/ffffff?text=Thanksgiving"
    },
    {
        date: "2025-12-24",
        name: "Private Aurora Borealis Watch",
        description: "A private, exclusive holiday for one client: guaranteed perfect viewing of the Northern Lights from a custom-built orbital platform.",
        type: "You Only",
        scope: "Private",
        ageEligibility: "18+", // ADDED FIELD
        image: "https://placehold.co/600x200/1d3557/ffffff?text=Private+Aurora+Watch"
    },
    {
        date: "2025-12-25",
        name: "Christmas Day",
        description: "A United States federal holiday celebrating the birth of Jesus Christ.",
        type: "National",
        scope: "Public",
        ageEligibility: "All Ages", // ADDED FIELD
        image: "https://placehold.co/600x200/40916c/ffffff?text=Christmas+Day"
    },
    {
        date: "2026-01-01",
        name: "New Year's Day",
        description: "A United States federal holiday celebrating the start of the Gregorian calendar year.",
        type: "National",
        scope: "Public",
        ageEligibility: "All Ages", // ADDED FIELD
        image: "https://placehold.co/600x200/5a189a/ffffff?text=New+Years+Day"
    },
    {
        date: "2026-01-05",
        name: "First Contact Anniversary",
        description: "A day to celebrate all forms of connection and communication across cultures. Public festivals and private retreats available.",
        type: "World Wide",
        scope: "Public",
        ageEligibility: "All Ages", // ADDED FIELD
        image: "https://placehold.co/600x200/2a9d8f/ffffff?text=Contact+Anniversary"
    },
    {
        date: "2026-01-19",
        name: "M.L. King, Jr.'s Day",
        description: "A United States federal holiday marking the birthday of Martin Luther King Jr.",
        type: "National",
        scope: "Public",
        ageEligibility: "All Ages", // ADDED FIELD
        image: "https://placehold.co/600x200/0077b6/ffffff?text=MLK+Day"
    },
    {
        date: "2026-02-16",
        name: "Washington's Birthday (Presidents' Day)",
        description: "A United States federal holiday celebrating George Washington and Abraham Lincoln, often called Presidents' Day.",
        type: "National",
        scope: "Public",
        ageEligibility: "All Ages", // ADDED FIELD
        image: "https://placehold.co/600x200/03045e/ffffff?text=Presidents+Day"
    },
    {
        date: "2026-03-20",
        name: "The Equinox Reset",
        description: "A simple, private 24-hour holiday for a single corporate client focused on reorganizing workflows and strategic planning.",
        type: "Group",
        scope: "Private",
        ageEligibility: "18+", // ADDED FIELD
        image: "https://placehold.co/600x200/f2cc8f/ffffff?text=Equinox+Reset"
    },
    {
        date: "2026-04-07",
        name: "Global Health & Wellness Day",
        description: "A day dedicated to promoting physical and mental well-being, featuring free meditation retreats and outdoor activities.",
        type: "World Wide",
        scope: "Public",
        ageEligibility: "All Ages", // ADDED FIELD
        image: "https://placehold.co/600x200/4c9568/ffffff?text=Health+Wellness"
    },
    {
        date: "2026-05-25",
        name: "Memorial Day",
        description: "A United States federal holiday honoring the men and women who died while serving in the U.S. military.",
        type: "National",
        scope: "Public",
        ageEligibility: "All Ages", // ADDED FIELD
        image: "https://placehold.co/600x200/a41623/ffffff?text=Memorial+Day"
    },
    {
        date: "2026-06-19",
        name: "Juneteenth National Independence Day",
        description: "A United States federal holiday commemorating the emancipation of enslaved African Americans.",
        type: "National",
        scope: "Public",
        ageEligibility: "All Ages", // ADDED FIELD
        image: "https://placehold.co/600x200/3a0ca3/ffffff?text=Juneteenth"
    },
    {
        date: "2026-07-04",
        name: "Independence Day",
        description: "A United States federal holiday commemorating the Declaration of Independence.",
        type: "National",
        scope: "Public",
        ageEligibility: "All Ages", // ADDED FIELD
        image: "https://placehold.co/600x200/00b4d8/ffffff?text=Independence+Day"
    },
    {
        date: "2026-09-07",
        name: "Labor Day",
        description: "A United States federal holiday celebrating the contributions of American workers.",
        type: "National",
        scope: "Public",
        ageEligibility: "All Ages", // ADDED FIELD
        image: "https://placehold.co/600x200/007f5f/ffffff?text=Labor+Day"
    },
    {
        date: "2026-10-12",
        name: "Columbus Day",
        description: "A United States federal holiday commemorating the arrival of Christopher Columbus in the Americas.",
        type: "National",
        scope: "Public",
        ageEligibility: "All Ages", // ADDED FIELD
        image: "https://placehold.co/600x200/f77f00/ffffff?text=Columbus+Day"
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
    // Compensation amount is now read from the selected option value (a string that must be converted to number)
    const compensationAmountSelect = document.getElementById('compensationAmount');

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

    if (paidCompensation === 'Yes' && compensationAmountSelect.value && compensationAmountSelect.value !== '0') {
        const compPerPersonPerDay = Number(compensationAmountSelect.value);
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
            <p><strong>Ages:</strong> ${nextHoliday.ageEligibility}</p>
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
                    <br><strong>Ages:</strong> ${holiday.ageEligibility}
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
    const compensationAmountSelect = document.getElementById('compensationAmount');

    if (show) {
        compensationDetails.classList.add('visible');
        compensationAmountSelect.setAttribute('required', 'required');
    } else {
        compensationDetails.classList.remove('visible');
        compensationAmountSelect.removeAttribute('required');
        compensationAmountSelect.value = 0; // Reset value to default "Select Desired Amount"
    }
    // Call calculation after toggling visibility
    updateTotalAmount();
};

/**
 * Saves a holiday submission to the public list in localStorage if its scope is 'World Wide'.
 * @param {object} holidayDetails - The details of the created holiday.
 */
function savePublicHoliday(holidayDetails) {
    if (holidayDetails.scope !== 'World Wide') {
        return; // Only save public holidays
    }

    try {
        const publicDataString = localStorage.getItem('publicHolidays');
        let publicHolidays = [];

        if (publicDataString) {
            publicHolidays = JSON.parse(publicDataString);
        }

        // Add the new public holiday
        publicHolidays.push(holidayDetails);

        // Save the updated list back to localStorage
        localStorage.setItem('publicHolidays', JSON.stringify(publicHolidays));
    } catch (e) {
        console.error("Failed to save public holiday data to localStorage:", e);
    }
}


/**
 * Logic for Rent.html
 */
function handleRentalPage() {
    const rentalForm = document.getElementById('rentalForm');
    const paidNoRadio = document.getElementById('paidNo');
    const submissionMessage = document.getElementById('submission-message');
    const scopeSelect = document.getElementById('scope');


    // Ensure compensation details are hidden and 'No' is selected initially
    toggleCompensationAmount(false);
    paidNoRadio.checked = true;

    // Set initial total amount display
    updateTotalAmount(); 

    // 2. Form Submission Handler
    if (rentalForm) {
        rentalForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // --- Form Data and Validation ---
            const startDate = document.getElementById('startDate').value;
            const endDate = document.getElementById('endDate').value;
            const paidCompensation = document.querySelector('input[name="paidCompensation"]:checked').value;
            const compensationAmountSelect = document.getElementById('compensationAmount');
            const compensationAmount = compensationAmountSelect.value;
            const finalTotalText = document.getElementById('final-total').textContent; 
            const ageEligibility = document.getElementById('ageEligibility').value; // CAPTURE NEW FIELD

            if (new Date(startDate) > new Date(endDate)) {
                submissionMessage.textContent = 'Error: The Holiday Start Date cannot be after the End Date.';
                submissionMessage.className = 'message-box error-box';
                submissionMessage.style.display = 'block';
                return;
            }

            if (paidCompensation === 'Yes' && (compensationAmount === '0' || !compensationAmount)) {
                 submissionMessage.textContent = 'Error: Compensation amount must be selected if mandatory compensation is chosen.';
                 submissionMessage.className = 'message-box error-box';
                 submissionMessage.style.display = 'block';
                 return;
            }
            
            // --- Success Path: Collect, Store, and Display ---
            const formData = new FormData(rentalForm);
            
            // Get text value for budget tier and compensation for better display
            const budgetTierText = document.getElementById('budget').options[document.getElementById('budget').selectedIndex].text;
            const compensationAmountText = paidCompensation === 'Yes' ? compensationAmountSelect.options[compensationAmountSelect.selectedIndex].text : 'None';
            const ageEligibilityText = document.getElementById('ageEligibility').options[document.getElementById('ageEligibility').selectedIndex].text; // CAPTURE NEW FIELD TEXT

            const holidayDetails = {
                theme: formData.get('theme'),
                startDate: startDate,
                endDate: endDate,
                scope: formData.get('scope'),
                ageEligibility: ageEligibilityText, // SAVE NEW FIELD
                recurrence: formData.get('recurrence'),
                budgetTier: budgetTierText,
                paidCompensation: paidCompensation,
                compensationAmount: compensationAmountText,
                paymentOption: formData.get('paymentOption'),
                fullName: formData.get('fullName'),
                
                // Summary Totals (for display on new page)
                baseInvestment: document.getElementById('base-investment').textContent,
                compensationEstimate: document.getElementById('compensation-estimate').textContent,
                finalTotal: finalTotalText
            };

            // 1. Store the JSON data as the user's last submission (private view)
            localStorage.setItem('createdHoliday', JSON.stringify(holidayDetails));

            // 2. Save to public list if scope is 'World Wide'
            savePublicHoliday(holidayDetails);

            // Display a success message and the button
            submissionMessage.innerHTML = `
                <h3>Request Submitted Successfully!</h3>
                <p>We've received your custom holiday concept, "<strong>${holidayDetails.theme}</strong>."</p>
                <div style="margin-top: 10px; padding: 10px; border: 1px dashed #ccc; border-radius: 4px; background-color: #f9f9f9;">
                    <strong>Estimated Total: ${holidayDetails.finalTotal}</strong><br>
                    <strong>Start Date:</strong> ${formatDate(holidayDetails.startDate)}<br>
                    <strong>Target Ages:</strong> ${holidayDetails.ageEligibility}
                </div>
                <button type="button" class="cta-button" onclick="window.location.href='newholiday.html'" style="margin-top: 20px;">
                    View All Holiday Concepts
                </button>
            `;
            submissionMessage.className = 'message-box success-box';
            submissionMessage.style.display = 'block';
            
            // Note: We don't call form.reset() immediately so the user can see the link/button
        });
    }
}


// --- Main Execution Block ---

// Mock Public Data Initialization (for fresh run testing)
(function initMockPublicHolidays() {
    if (!localStorage.getItem('publicHolidays')) {
        const mockHolidays = [
            {
                theme: "Global Kindness Week",
                startDate: "2026-03-15",
                endDate: "2026-03-22",
                scope: "World Wide",
                ageEligibility: "All Ages", // ADDED FIELD
                recurrence: "Annually / Yearly",
                budgetTier: "$50,000 | The Global Chronomancer",
                paidCompensation: "Yes",
                compensationAmount: "$50.00 - Enhanced Stipend",
                fullName: "Jane Doe",
                finalTotal: "$55,000.00"
            },
             {
                theme: "Planetary Silence Day",
                startDate: "2026-04-01",
                endDate: "2026-04-01",
                scope: "World Wide",
                ageEligibility: "18+", // ADDED FIELD
                recurrence: "One Time Event (No Repeat)",
                budgetTier: "$10,000 | The Local Explorer",
                paidCompensation: "No",
                compensationAmount: "None",
                fullName: "Alice Smith",
                finalTotal: "$10,000.00"
            }
        ];
        localStorage.setItem('publicHolidays', JSON.stringify(mockHolidays));
    }
})();


document.addEventListener('DOMContentLoaded', () => {
    // Check which page is loaded and run the corresponding script
    const path = window.location.pathname;

    if (path.includes('newsinfo.html')) {
        handleNewsInfoPage();
    } else if (path.includes('Rent.html')) {
        handleRentalPage();
    }
});
