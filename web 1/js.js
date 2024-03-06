document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.header-p');
    const links = header.querySelectorAll('.aa');

    // Function to handle link clicks
    function handleLinkClick(event) {
        event.preventDefault();

        // Remove active class from all links
        links.forEach(function(link) {
            link.classList.remove('active');
        });

        // Add active class to clicked link
        this.classList.add('active');

        // Store the href of the clicked link in localStorage
        localStorage.setItem('activeLink', this.getAttribute('href'));

        // Navigate to the clicked link
        const href = this.getAttribute('href');
        setTimeout(function() {
            window.location.href = href;
        }, 300); // You can adjust the delay as needed
    }

    // Add click event listener to each link
    links.forEach(function(link) {
        link.addEventListener('click', handleLinkClick);

        // Check if the link's href matches the stored active link
        const activeLink = localStorage.getItem('activeLink');
        if (activeLink && link.getAttribute('href') === activeLink) {
            link.classList.add('active');
        }
    });
});
