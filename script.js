document.addEventListener("DOMContentLoaded", function () {
  function updateTime() {
    const now = new Date();

    // Calculate Nigerian time (GMT+1)
    now.setHours(now.getHours() + 1);

    // UTC time
    const utcTime = now.toUTCString().split(" ")[4];
    // Day of the week
    const day = now.toLocaleString("en-US", { weekday: "long" });
    // Update HTML elements
    document.getElementById("utcTime").textContent = utcTime;
    document.getElementById("currentDay").textContent = day;
  }

  updateTime();
  setInterval(updateTime, 60000); // Update time every minute
});
