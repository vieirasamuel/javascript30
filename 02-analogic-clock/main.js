const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minuteDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hourDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
