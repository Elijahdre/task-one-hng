document.addEventListener("DOMContentLoaded", function () {
  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    const day = now.toLocaleString("en-US", { weekday: "long" });

    document.getElementById("utcTime").textContent = utcTime;
    document.getElementById("currentDay").textContent = day;
  }

  updateTime();
  setInterval(updateTime, 60000); // Update time every minute
});
