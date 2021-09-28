function getTime(t) {
  const time = Date.parse(t) - Date.parse(new Date());
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / 1000 / 60) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  return {
    'total': time,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, t) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');
 
  function updateClock() {
    const time = getTime(t);
    daysSpan.innerHTML = time.days;
    hoursSpan.innerHTML = ('0' + time.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + time.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + time.seconds).slice(-2);

  }
 
  updateClock();
  setInterval(updateClock, 1000);
}
 
const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); 
initializeClock('timer-1', deadline);