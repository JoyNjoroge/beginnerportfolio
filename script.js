document.addEventListener("DOMContentLoaded", function () {
    // Typing effect for name
    const nameElement = document.getElementById("animated-name");
    const nameText = "Joy Njoroge";
    let index = 0;

    function typeEffect() {
        if (index < nameText.length) {
            nameElement.textContent += nameText.charAt(index);
            index++;
            setTimeout(typeEffect, 150);
        }
    }

    nameElement.textContent = ""; // Clear initial text
    typeEffect();

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Toggle mobile menu
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("open");
    });

    // Dark mode toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Project filtering
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");
            
            projects.forEach(project => {
                if (filter === "all" || project.classList.contains(filter)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});
