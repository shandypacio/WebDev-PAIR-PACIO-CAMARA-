

document.addEventListener('DOMContentLoaded', () => {
    const timeFilter = document.getElementById('timeFilter');
    const recipes = document.querySelectorAll('.card');

    timeFilter.addEventListener('change', () => {
        const selectedValue = timeFilter.value;

        recipes.forEach(card => {
            const totalTimeBadge = card.querySelector('.badge:nth-child(1)').textContent; // Assuming "Total Time" is the first badge
            const totalTimeMatch = totalTimeBadge.match(/(\d+)/);
            const totalTime = totalTimeMatch ? parseInt(totalTimeMatch[0]) : 0;

            let shouldDisplay = false;

            if (selectedValue === 'all') {
                shouldDisplay = true; 
            } else if (selectedValue === '30') {
                shouldDisplay = totalTime > 0 && totalTime <= 30; // 1-30 minutes
            } else if (selectedValue === '60') {
                shouldDisplay = totalTime > 30 && totalTime <= 60; // 31-60 minutes
            } else if (selectedValue === '120') {
                shouldDisplay = totalTime > 60 && totalTime <= 120; // 61-120 minutes
            } else if (selectedValue === 'more') {
                shouldDisplay = totalTime > 120; // More than 120 minutes
            }

            // Toggle card visibility
            card.parentElement.style.display = shouldDisplay ? '' : 'none';
        });
    });
});

console.log(`Selected Filter: ${selectedValue}, Total Time: ${totalTime}`);
