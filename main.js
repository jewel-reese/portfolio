document.addEventListener('DOMContentLoaded', function() {
    const navbarMenu = document.querySelector('.menu');
    const iconToggle = document.querySelector('.toggle_icon');
    const iconClose = document.querySelector('.close_icon');
    const logoLink = document.querySelector('.logo a');
    const aboutLink = document.querySelector('.menu_link[href="#about"]');
    const menuLinks = document.querySelectorAll('.menu_link');
    const readCaseStudyBtn = document.getElementById('r eadCaseStudyBtn');
    const portfolioLink = document.querySelector('.menu_link[href="#projects"]');

    iconToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });
    
    iconClose.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });


    // Handle logo click (go to homepage)
    logoLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'index.html';
    });

    // Handle about link click (go to about page)
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'about.html';
    });

    // Handle portfolio link click (scroll to portfolio section)
    portfolioLink.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection('#projects');
    });

    // Handle menu links click (smooth scroll or page navigation)
    menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = menuLink.getAttribute('href').substr(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const topOffset = navbarMenu.offsetHeight;
                const targetPosition = targetSection.offsetTop - topOffset;
                if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                } else {
                    window.location.href = targetSection.getAttribute('id') + '.html';
                }
                navbarMenu.classList.remove('active');
            }
        });
    });

    // Handle readCaseStudyBtn click (go to recipease page)
    if (readCaseStudyBtn) {
        readCaseStudyBtn.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'recipease.html'; // Change URL as needed
        });
    }

    // Function to scroll to a specific section
    function scrollToSection(selector) {
        const targetSection = document.querySelector(selector);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    }
});


// Hero Type effect
const typed = document.querySelector('.typed');

if(typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

