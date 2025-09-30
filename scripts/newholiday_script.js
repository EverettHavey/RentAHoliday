/**
 * Loads the created holiday details from localStorage and displays them on newholiday.html.
 */
function displayCreatedHoliday() {
    const detailsOutput = document.getElementById('details-output');
    const header = document.querySelector('#holiday-details-card h2');
    
    // 1. Retrieve the JSON data from localStorage
    const savedData = localStorage.getItem('createdHoliday');
    
    if (!savedData) {
        header.textContent = "No Recent Holiday Submission Found";
        detailsOutput.innerHTML = '<p style="color: red;">It looks like the form was not submitted or data was cleared. Please return to the <a href="Rent.html">Plan & Rent page</a> to create a new holiday.</p>';
        return;
    }
    
    try {
        // 2. Parse the JSON string back into a JavaScript object
        const holiday = JSON.parse(savedData);
        
        // 3. Update the header
        header.textContent = `Details for: ${holiday.theme}`;
        
        // 4. Generate the detailed HTML display
        detailsOutput.innerHTML = `
            <h3>General Details</h3>
            <div class="detail-group">
                <div class="detail-item"><strong>Start Date:</strong> <span>${holiday.startDate}</span></div>
                <div class="detail-item"><strong>End Date:</strong> <span>${holiday.endDate}</span></div>
                <div class="detail-item"><strong>Scope:</strong> <span>${holiday.scope}</span></div>
                <div class="detail-item"><strong>Recurrence:</strong> <span>${holiday.recurrence}</span></div>
            </div>
            
            <h3>Financial Summary</h3>
            <div class="detail-group">
                <div class="detail-item"><strong>Selected Tier:</strong> <span>${holiday.budgetTier}</span></div>
                <div class="detail-item"><strong>Base Investment:</strong> <span>${holiday.baseInvestment}</span></div>
                <div class="detail-item"><strong>Compensation Mandate:</strong> <span>${holiday.paidCompensation}</span></div>
                <div class="detail-item"><strong>Comp. Amount:</strong> <span>${holiday.compensationAmount}</span></div>
                <div class="detail-item"><strong>Comp. Fund Estimate:</strong> <span>${holiday.compensationEstimate}</span></div>
                <div class="detail-item"><strong>Preferred Payment:</strong> <span>${holiday.paymentOption}</span></div>
            </div>

            <div class="total-summary">
                <strong>Final Estimated Initial Cost:</strong> <span>${holiday.finalTotal}</span>
            </div>

            <p style="margin-top: 20px;"><em>Thank you, ${holiday.fullName}, for your submission. Our Chronomancy team will be in touch shortly to finalize the quote and begin coordination.</em></p>
        `;
        
    } catch (e) {
        console.error("Error parsing saved holiday data:", e);
        header.textContent = "Data Error";
        detailsOutput.innerHTML = '<p style="color: red;">Could not load holiday details due to a data parsing error.</p>';
    }
}

// Execute the display function when the page loads
document.addEventListener('DOMContentLoaded', displayCreatedHoliday);
