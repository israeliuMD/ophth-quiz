// This script will fix the topic selection functionality
// Add this to your existing app.js file or include as a separate script

document.addEventListener('DOMContentLoaded', function() {
    // Get all topic buttons and dropdown panels
    const topicButtons = document.querySelectorAll('.topic-btn');
    const topicDropdowns = document.querySelectorAll('.topic-dropdown');
    
    // Add click event listeners to each topic button
    topicButtons.forEach(button => {
        button.addEventListener('click', function() {
            const topicId = this.getAttribute('data-topic');
            const targetDropdown = document.getElementById(`${topicId}-dropdown`);
            
            // If clicking an already active topic, close it
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                this.setAttribute('aria-selected', 'false');
                targetDropdown.classList.remove('active');
                targetDropdown.hidden = true;
                return;
            }
            
            // Remove active class from all buttons and dropdowns
            topicButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            topicDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
                dropdown.hidden = true;
            });
            
            // Add active class to clicked button and corresponding dropdown
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            targetDropdown.classList.add('active');
            targetDropdown.hidden = false;
            
            // Smooth scroll to the dropdown
            targetDropdown.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });
});
