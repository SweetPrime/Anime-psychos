const playBtn = document.getElementById("playBtn");
const prank = document.getElementById("prank");
const audio = document.getElementById("memeAudio");

playBtn.addEventListener("click", () => {
  prank.classList.remove("hidden");
  audio.volume = 1.0;
  audio.play().catch(() => {
    alert("Tap again to enable sound 🔊");
  });
});
