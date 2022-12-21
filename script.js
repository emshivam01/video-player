const player = document.getElementById("video");
const vid = document.querySelector("video");
const progressBar = document.getElementById("progressBar");
const toggle = document.getElementById("play");
const pause = document.getElementById("pause");
const volumeSlider = document.getElementById("volumeSlider");
const volumeIcon = document.getElementById("volumeIcon");

const fullScreen = document.getElementById("fullscreen");

// toggle.addEventListener("click", () => {
//   const method = player.paused ? "play" : "pause";
//   player[method]();
//   toggle.innerText = toggle.innerText == "play_arrow" ? "pause" : "play_arrow";
// });

const playVideo = () => {
  const method = player.paused ? "play" : "pause";
  player[method]();
  toggle.innerText = toggle.innerText == "play_arrow" ? "pause" : "play_arrow";
};

toggle.addEventListener("click", playVideo);
vid.addEventListener("click", playVideo);

fullScreen.addEventListener("click", () => {
  player.requestFullscreen();
});

// Update Progress Bar

vid.addEventListener("timeupdate", () => {
  progressBar.value = Math.round((vid.currentTime / vid.duration) * 100);
});

// Volume Function

volumeSlider.addEventListener("click", (i) => {
  vid.volume = i.target.value;
});
