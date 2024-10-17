const DAYS = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

const MONTHS = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];



const SaleTime = document.querySelector('.SaleDate');
const timerContainer = document.querySelector('.timer');
const items = document.querySelectorAll('.timer h1')

const futureTime = new Date(2024, 09, 19, 11, 3, 0); //change this date according to yours
console.log(futureTime);

const year = futureTime.getFullYear();
const hour = futureTime.getHours();
const minute = futureTime.getMinutes();
const second = futureTime.getSeconds();
const date = futureTime.getDate();


let month = futureTime.getMonth();
month = MONTHS[month]
let day = futureTime.getDay();
day = DAYS[day]

SaleTime.innerHTML = `<span>Giveaway Ends On ${day}, ${date} ${month} ${year} ${hour}:${minute}0am</span>`

function getRemainingTime() {
  const currentTime = new Date().getTime();

  const t = futureTime - currentTime;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d= 24hr
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // Calculating all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // seting values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return item = `0${item}`
    }
    return item
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    timerContainer.innerHTML = `<h2 class="expired">Sorry, this givaway has expired</h2>`
  }
}
// countdown
let countdown = setInterval(getRemainingTime, 1000);
 
getRemainingTime();
