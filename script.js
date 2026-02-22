const link = document.querySelector(".select");
const sound = document.getElementById("selectSound");

let hasPlayed = false;

link.addEventListener("mouseenter", () => {
  if (!hasPlayed) {
    sound.currentTime = 0;
    sound.play().catch(() => {
      // Some browsers require user interaction first
    });
    hasPlayed = true;
  }
});

link.addEventListener("mouseleave", () => {
  hasPlayed = false; // allows replay on next hover
});