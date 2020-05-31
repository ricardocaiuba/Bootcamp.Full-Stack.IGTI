window.addEventListener("load", () => {
  console.log("-> js loaded...");
  const timer = document.querySelector("#timer");
  let count = 0;

  const interval = setInterval(() => {
    timer.textContent = ++count;
    if (count === 10) {
      this.clearInterval(interval);
      return;
    }
    if (count % 5 === 0) {
      setTimeout(() => {
        timer.textContent = count + 0.5;
      }, 500);
    }
  }, 1000);
});
