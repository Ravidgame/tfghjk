// فایل script.js
// تغییر پس‌زمینه Hero با حرکت ماوس
const heroBg = document.getElementById('hero-bg');
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  heroBg.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});

// افکت کلیک برای دکمه‌ها
document.querySelectorAll('.neon-button').forEach(button => {
  button.addEventListener('click', () => {
    button.style.boxShadow = '0 0 30px #00e6ff, 0 0 60px #ff00cc';
    setTimeout(() => {
      button.style.boxShadow = '0 0 10px #00e6ff';
    }, 200);
  });
});