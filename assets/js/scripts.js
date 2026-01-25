// Navigation toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Example slider/knob animation placeholder
// TODO: Replace with your Cloudflare audio or image slider logic
document.querySelectorAll('.knob').forEach(knob => {
    let deg = 0;
    setInterval(() => {
        deg = (deg + 1) % 360;
        knob.style.transform = `rotate(${deg}deg)`;
    }, 50);
});
