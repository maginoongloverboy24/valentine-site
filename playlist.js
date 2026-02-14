

/* ===============================
   GLOBAL PLAYLIST PLAYER
   =============================== */

const playlist = [
  "Torpe.mp3",
  "Lowkey.mp3",
  "palayoSaM.mp3",
  "Mahika.mp3",
  "fallInLOveaAg.mp3"
];

let audio = new Audio();
audio.volume = 1;

/* load saved state */
let currentSong = parseInt(localStorage.getItem("playlistIndex")) || 0;
let currentTime = parseFloat(localStorage.getItem("playlistTime")) || 0;

/* play function */
function playPlaylist(){
  audio.src = playlist[currentSong];
  audio.currentTime = currentTime;
  audio.play().catch(()=>{});
}

/* save progress constantly */
setInterval(()=>{
  if(!audio.paused){
    localStorage.setItem("playlistIndex", currentSong);
    localStorage.setItem("playlistTime", audio.currentTime);
  }
},1000);

/* next song when finished */
audio.addEventListener("ended",()=>{
  currentSong++;

  if(currentSong >= playlist.length){
    currentSong = 0; // loop back to song 1
  }

  currentTime = 0;
  playPlaylist();
});

/* start if playlist active */
if(localStorage.getItem("playlistActive")==="true"){
  playPlaylist();
}

