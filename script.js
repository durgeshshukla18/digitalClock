// document.addEventListener("DOMContentLoaded", function() {
//   const toggleBtn = document.getElementById("toggleButton");

//   toggleBtn.addEventListener("click", () => {
//     document.body.classList.toggle("dark");
//   });
// });


document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleButton");
  const hoursElem = document.getElementById("hours");
  const minutesElem = document.getElementById("minutes");
  const secondsElem = document.getElementById("seconds");
  const timeZoneSelect = document.querySelector(".form-select");

  let currentTimeZone = timeZoneSelect.value;

  function updateClock() {
    const now = new Date();

    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: currentTimeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const parts = formatter.formatToParts(now);
    
    let hours = parts.find(p => p.type === "hour").value;
    let minutes = parts.find(p => p.type === "minute").value;
    let seconds = parts.find(p => p.type === "second").value;

    hoursElem.textContent = hours;
    minutesElem.textContent = minutes;
    secondsElem.textContent = seconds;
  }

  setInterval(updateClock, 1000);
  updateClock(); // run immediately

  timeZoneSelect.addEventListener("change", () => {
    currentTimeZone = timeZoneSelect.value;
    updateClock();
  });

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
