const timeDisplay = document.getElementById("time");
const dateDisplay = document.getElementById("date");

const displayTimeAndDate = () => {
  const date = new Date();
  const time = `${date.getUTCHours().toString().padStart(2, "0")}:${date.getUTCMinutes().toString().padStart(2, "0")}:${date.getUTCSeconds().toString().padStart(2, "0")}`;
  const currentDay = date.toLocaleDateString("en-US", {
    weekday: "long",
  });

  timeDisplay.textContent = time;
  dateDisplay.textContent = currentDay;
}

displayTimeAndDate();
setInterval(displayTimeAndDate, 1000);