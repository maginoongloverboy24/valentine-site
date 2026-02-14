const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const messageArea = document.getElementById("messageArea");
const music = document.getElementById("bgMusic");

let firstClick = true;

/* force music play after first interaction */
function startMusic(){
  music.play().catch(()=>{});
  document.removeEventListener("click", startMusic);
}

document.addEventListener("click", startMusic);

/* pangkulit messages */
const messages = [
  "Are you sure? 🙄",
  "Think again!",
  "Wag naman 😭",
  "I will cry!",
  "Say yes na!",
  "Last chance!",
  "Why you like that 😭",
  "Please just press YES",
  "Be nice naman 😭"
];

/* NO button runs */
noBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if(firstClick){
    noBtn.style.position="fixed";
    noBtn.style.zIndex="999";
    firstClick=false;
  }

  moveButton();
  showMessage();
});

function moveButton(){
  const padding=20;
  const maxX=window.innerWidth-noBtn.offsetWidth-padding;
  const maxY=window.innerHeight-noBtn.offsetHeight-padding;

  noBtn.style.left=Math.random()*maxX+"px";
  noBtn.style.top=Math.random()*maxY+"px";
}

function showMessage(){
  messageArea.textContent=
    messages[Math.floor(Math.random()*messages.length)];
}

yesBtn.addEventListener("click",()=>{

  /* activate playlist */
  localStorage.setItem("playlistActive","true");
  localStorage.setItem("playlistIndex","0");
  localStorage.setItem("playlistTime","0");

  window.location.href="yes.html";
});













