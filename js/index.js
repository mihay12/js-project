const millennia = document.querySelector('.millennia');
const centuries = document.querySelector('.centuries');
const years = document.querySelector('.years');
const months = document.querySelector('.months');
const weeks = document.querySelector('.weeks');
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const countdown = document.querySelector('.countdown');
const year = document.querySelector('.year');
const loading = document.querySelector('.loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`May 22 ${currentYear + 70000} 00:00:00`);

// Set background year
year.innerText = currentYear;

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const millenniumUpdate = Math.floor(diff / 1000 / 60 / 60 / 24 / 7 / 30 / 12 / 1000);
  const centuryUpdate = Math.floor(diff / 1000 / 60 / 60 / 24 / 7 / 30 / 12 / 100);
  const yearUpdate = Math.floor(diff / 1000 / 60 / 60 / 24 / 7 / 30 / 12);
  const monthUpdate = Math.floor(diff / 1000 / 60 / 60 / 24 / 7 / 30);
  const weekUpdate = Math.floor(diff / 1000 / 60 / 60 / 24 / 7);
  const dayUpdate = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hourUpdate = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minuteUpdate = Math.floor(diff / 1000 / 60) % 60;
  const secondUpdate = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  millennia.innerHTML = millenniumUpdate;
  centuries.innerHTML = centuryUpdate;
  years.innerHTML = yearUpdate;
  months.innerHTML = monthUpdate;
  weeks.innerHTML = weekUpdate;
  days.innerHTML = dayUpdate;
  hours.innerHTML = hourUpdate < 10 ? '0' + hourUpdate : hourUpdate;
  minutes.innerHTML = minuteUpdate < 10 ? '0' + minuteUpdate : minuteUpdate;
  seconds.innerHTML = secondUpdate < 10 ? '0' + secondUpdate : secondUpdate;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);