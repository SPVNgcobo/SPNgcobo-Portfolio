document.addEventListener('DOMContentLoaded', function() {
    const skills = [
        'Python', 'JavaScript', 'HTML', 'CSS', 'React.js', 'Node.js',
        'Networking', 'Network Automation', 'Cybersecurity', 'SQL',
        'Git', 'GitHub', 'Arduino', 'IoT', 'C++', 'Java'
    ];
    const skillBadgesContainer = document.querySelector('.skill-badges-container');

    if (skillBadgesContainer) {
        skills.forEach((skill, index) => {
            const badge = document.createElement('span');
            badge.classList.add('skill-badge');
            badge.textContent = skill;
            skillBadgesContainer.appendChild(badge);

            setTimeout(() => {
                badge.style.opacity = 1;
                badge.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a, .hero-buttons a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
