document.addEventListener('DOMContentLoaded', () => {
    const timeSlots = document.querySelectorAll('.time-slot');
    const detailsDiv = document.getElementById('details');

    timeSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            const details = slot.getAttribute('data-details');
            detailsDiv.innerText = details;
        });
    });
});
