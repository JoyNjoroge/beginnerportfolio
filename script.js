document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const form = document.getElementById('contact-form form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
 
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return;
    }
    
    alert('Message sent successfully!');
    form.reset();
});

// Animate gradient colors
const gradientBoxes = document.querySelectorAll('.gradient-box');
let hue = 0;

function animateGradients() {
    hue = (hue + 1) % 360;
    gradientBoxes.forEach((box, index) => {
        const hue1 = (hue + index * 120) % 360;
        const hue2 = (hue1 + 60) % 360;
        box.style.background = `linear-gradient(45deg, hsl(${hue1}, 100%, 50%), hsl(${hue2}, 100%, 50%))`;
    });
    requestAnimationFrame(animateGradients);
}
animateGradients();

// Load projects dynamically
fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
        const projectsContainer = document.createElement('div');
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project';
            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}">View Project</a>
            `;
            projectsContainer.appendChild(projectElement);
        });
        document.getElementById('projects').appendChild(projectsContainer);
    });

// Theme toggle
const themeToggle = document.createElement('button');
themeToggle.textContent = '🌓';
themeToggle.style.position = 'fixed';
themeToggle.style.bottom = '20px';
themeToggle.style.right = '20px';
themeToggle.style.zIndex = '1000';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        document.body.style.backgroundColor = '#f5f5f5';
        document.body.style.color = '#333';
    } else {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
    }
});


// Animate elements on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.gradient-box, #about, #contact').forEach(section => {
    observer.observe(section);
});

// Display follower counts (example with GitHub)
fetch('https://api.github.com/users/JoyNjoroge')
    .then(response => response.json())
    .then(data => {
        const githubLink = document.querySelector('a[href*="github"]');
        if (data.followers) {
            githubLink.innerHTML += ` <span>(${data.followers} followers)</span>`;
        }
    });

// Fun console message
console.log('%c👋 Hello fellow developer!', 'font-size: 20px; color: #ffcc00;');
console.log('%cCheck out my code on GitHub: https://github.com/JoyNjoroge', 'font-size: 14px;');

// Mobile menu toggle
const menuToggle = document.createElement('button');
menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
menuToggle.className = 'mobile-menu-toggle';
document.body.appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
});

// Simple visitor counter
if (!localStorage.visitCount) {
    localStorage.visitCount = 0;
}
localStorage.visitCount++;
document.getElementById('visitor-count').textContent = localStorage.visitCount;

