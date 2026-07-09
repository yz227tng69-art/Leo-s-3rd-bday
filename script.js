const partyDate = new Date('2026-08-08T15:00:00-06:00');
const ids = ['days','hours','minutes','seconds'];
const els = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));

function updateCountdown(){
  const now = new Date();
  let diff = Math.max(0, partyDate - now);
  const days = Math.floor(diff / 86400000); diff %= 86400000;
  const hours = Math.floor(diff / 3600000); diff %= 3600000;
  const minutes = Math.floor(diff / 60000); diff %= 60000;
  const seconds = Math.floor(diff / 1000);
  els.days.textContent = days;
  els.hours.textContent = String(hours).padStart(2,'0');
  els.minutes.textContent = String(minutes).padStart(2,'0');
  els.seconds.textContent = String(seconds).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
