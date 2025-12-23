const playBtn = document.getElementById("playBtn");
const loading = document.getElementById("loading");
const prank = document.getElementById("prank");
const video = document.getElementById("prankVideo");
const audio = document.getElementById("memeAudio");

playBtn.addEventListener("click", () => {
  loading.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");
    prank.classList.remove("hidden");

    video.volume = 1;
    audio.volume = 1;

    video.play();
    audio.play();

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  }, 3000);
});
