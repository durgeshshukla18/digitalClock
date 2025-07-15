let hoursElem = document.getElementById("hours");
let minutesElem = document.getElementById("minutes");
let secondsElem = document.getElementById("seconds");
let timeZoneSelect = document.getElementById("selectedTimeZone");
let toggleBtn = document.getElementById("toggleButton"); // Assign toggle button reference

let currentTimeZone = timeZoneSelect.value;


function loadClock() {
  // Update the clock immediately
  updateClock();
  
  // Set up an interval to update the clock every second
  setInterval(updateClock, 1000);
}


function updateClock() {
  const now = new Date();
  // console.log(now);
  
  // Formating the time according to the current time zone
  const timeFormat = new Intl.DateTimeFormat("en-US", {
    timeZone: currentTimeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false, // 24-hour format
      });
      
      // Spliting time into hours, minutes, and seconds
      const timeSeparated = timeFormat.format(now);
      // console.log(timeSeparated); // Example output: "14:30:45"(hh:mm:ss)
      const [hours, minutes, seconds] = timeSeparated.split(":");
      // console.log(hours, minutes, seconds);
      // console.log(typeof hours, typeof minutes, typeof seconds);
      
      // Update the text content of the clock elements
      hoursElem.textContent = hours;
      minutesElem.textContent = minutes;
      secondsElem.textContent = seconds;
    }
    
    
    function changeTimeZone() {
      // Updating the currentTimeZone variable with the new selection
      currentTimeZone = timeZoneSelect.value;
      // Immediately update the clock to reflect the new time zone
      updateClock();
    }
    
    
    function toggleTheme() {
      document.body.classList.toggle("dark");
  }
  
  
  
  
  
  
  
  
  
  
  
  
  // Method-2 
  
  
  
  // document.addEventListener("DOMContentLoaded", () => {
    //   let hoursElem = document.getElementById("hours");
  //   let minutesElem = document.getElementById("minutes");
  //   let secondsElem = document.getElementById("seconds");
  //   let timeZoneSelect = document.getElementById("selectedTimeZone");
  //   let toggleBtn = document.getElementById("toggleButton");
  
  //   let currentTimeZone = timeZoneSelect.value;
  
  //   function updateClock() {
    //     const now = new Date();
  
    //     const timeFormat = new Intl.DateTimeFormat("en-US", {
      //       timeZone: currentTimeZone,
      //       hour: "2-digit",
      //       minute: "2-digit",
      //       second: "2-digit",
      //       hour12: false,
      //     });
      
      //     const timeSeperated = timeFormat.format(now);
      //     console.log(timeSeperated);
      
      //     const [hours, minutes, seconds] = timeSeperated.split(":");
      
      //     hoursElem.textContent = hours;
      //     minutesElem.textContent = minutes;
      //     secondsElem.textContent = seconds;
      //   }
      
      //   setInterval(updateClock, 1000);
      //   updateClock(); // run immediately
      
      
      //   // function changeTimeZone() {
        //   //   currentTimeZone = timeZoneSelect.value;
        //   //   updateClock();
        //   // }
        
        
        //   // to make it globally accessible, we are using addEventListener
        //   timeZoneSelect.addEventListener("change", () => {
          //     currentTimeZone = timeZoneSelect.value;
          //     updateClock();
  //   });
  
  
  //   // function toggleTheme() {
    //   //   document.body.classList.toggle("dark");
    //   //   // toggleBtn.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
    //   // }
    
    //   toggleBtn.addEventListener("click", () => {
      //     document.body.classList.toggle("dark");
      //   });
      // });
  
      
      // script.js
      
      
      
      ///
      
      
      // // document.addEventListener("DOMContentLoaded", function() {
      // //   const toggleBtn = document.getElementById("toggleButton");
      
      // //   toggleBtn.addEventListener("click", () => {
      // //     document.body.classList.toggle("dark");
      // //   });
      // // });