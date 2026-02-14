const playlist = [
  "Torpe.mp3",
  "Lowkey.mp3",
  "palayoSaM.mp3",
  "Mahika.mp3",
  "fallInLOveaAg.mp3"
];

let audio = new Audio();
let currentSong = 0;

/* restore progress */
if(localStorage.getItem("songIndex")){
  currentSong = parseInt(localStorage.getItem("songIndex"));
}

audio.src = playlist[currentSong];
audio.currentTime = parseFloat(localStorage.getItem("songTime")) || 0;

/* play only after interaction */
document.addEventListener("click", startPlaylistOnce, { once: true });
document.addEventListener("touchstart", startPlaylistOnce, { once: true });

function startPlaylistOnce(){
  audio.play().catch(()=>{});
}

/* when song ends */
audio.addEventListener("ended", () => {
  currentSong++;
  if(currentSong >= playlist.length){
    currentSong = 0;
  }

  localStorage.setItem("songIndex", currentSong);
  localStorage.setItem("songTime", 0);

  audio.src = playlist[currentSong];
  audio.play();
});

/* save progress */
setInterval(() => {
  localStorage.setItem("songTime", audio.currentTime);
}, 1000);

