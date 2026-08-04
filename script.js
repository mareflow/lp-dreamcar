document.addEventListener('DOMContentLoaded', () => {
    // Services Accordion Logic
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Remove active class from all items
            serviceItems.forEach(el => el.classList.remove('active'));
            // Add active class to the hovered item
            item.classList.add('active');
        });
        
        // Also support click for mobile/touch devices
        item.addEventListener('click', () => {
            serviceItems.forEach(el => el.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if(targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
