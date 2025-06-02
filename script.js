const clock = document.getElementById("clock");
const alarmTimeInput = document.getElementById("alarm-time");
const setAlarmBtn = document.getElementById("setalarm");
const clearAlarmBtn = document.getElementById("clearalarm");
const status = document.getElementById("status");
const alarmSound = document.getElementById("alarmsound");

let alarmTime = null;
let alarmTimeout = null;

// Real-time clock update
setInterval(() => {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { hour12: true });
  clock.textContent = timeString;

  if (alarmTime && timeString === alarmTime) {
    alarmSound.play();
    status.textContent = "⏰ Alarm Ringing!";
  }
}, 1000);

// Set Alarm
setAlarmBtn.addEventListener("click", () => {
  const input = alarmTimeInput.value;
  if (!input) {
    alert("Please select a valid time!");
    return;
  }

  const [hour, minute] = input.split(":");
  const now = new Date();
  const formatted = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);
  alarmTime = formatted.toLocaleTimeString('en-US', { hour12: true });
  
  status.textContent = `Alarm set for ${alarmTime}`;
});

// Clear Alarm
clearAlarmBtn.addEventListener("click", () => {
  alarmTime = null;
  alarmSound.pause();
  alarmSound.currentTime = 0;
  status.textContent = "Alarm cleared.";
});