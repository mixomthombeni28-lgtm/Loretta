// Play background music after user interaction
const mainMusic = document.getElementById("mainMusic");

function openPopup(){
    document.getElementById("popup").style.display="block";
    mainMusic.play().catch(()=>console.log("Autoplay blocked"));
}

// TYPING TITLE
const titleText = "Happy Valentine's Day My Baby girl ❤️";
let i = 0;
function typeTitle(){
    if(i < titleText.length){
        document.getElementById("typing").innerHTML += titleText.charAt(i);
        i++;
        setTimeout(typeTitle,80);
    }
}
typeTitle();

// TYPING LOVE LETTER
const letter = `From the moment you walked into my life,
everything became brighter.

You are my happiness, my peace, and my favorite person.
I don't just love you…
I love us.

Forever and always ❤️`;

let j=0;
function typeLetter(){
    if(j < letter.length){
        document.getElementById("loveLetter").innerHTML += letter.charAt(j);
        j++;
        setTimeout(typeLetter,35);
    }
}
setTimeout(typeLetter,2000);

// POPUP & YES BUTTON
function yesAnswer(){
    // Stop main music
    mainMusic.pause();
    mainMusic.currentTime = 0;

    // Hide main page
    document.querySelector(".container").style.display="none";
    document.querySelector(".hearts").style.display="none";
    document.getElementById("popup").style.display="none";

    // Show video section
    const section=document.getElementById("videoSection");
    section.style.display="block";

    // Play final song
    const music=document.getElementById("finalMusic");
    music.play().catch(()=>console.log("Autoplay blocked"));

    // Only one video
    const videos=[
        {src:"video1.mp4",msg:"Every moment with you is my favorite memory ❤️"}
    ];

    let index=0;
    const player=document.getElementById("player");
    const text=document.getElementById("videoMessage");
    player.preload = "auto";

    function playVideo(i){
        player.src = videos[i].src;
        text.innerHTML = videos[i].msg;
        player.muted = true;
        player.play();
    }

    playVideo(index);

    player.onended = function(){
        // Hide video player and text
        player.style.display = "none";
        text.style.display = "none";

        // Show final message container
        const fm = document.getElementById("finalMessage");
        fm.style.display = "block";
        setTimeout(()=>{ fm.classList.add("show"); }, 100);

        // Start typing final message
        typeFinalMessage();
        
        // Keep hearts floating
        setInterval(createHeart,150);
    };
}

// RUNAWAY BUTTON
const noBtn=document.getElementById("noBtn");
document.addEventListener("mousemove",()=>{
    if(noBtn){
        noBtn.style.position="absolute";
        noBtn.style.left=Math.random()*window.innerWidth+"px";
        noBtn.style.top=Math.random()*window.innerHeight+"px";
    }
});

// COUNTDOWN
const target=new Date("Feb 14, 2026 00:00:00").getTime();
setInterval(()=>{
    const now=new Date().getTime();
    const d=target-now;
    const days=Math.floor(d/(1000*60*60*24));
    document.getElementById("countdown").innerHTML=
    days+" days until our next date. See you ko THE STATION ❤️";
},1000);

// FALLING HEARTS
function createHeart(){
    const heart=document.createElement("span");
    heart.innerHTML="❤️";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.fontSize = (Math.random()*30+15) + "px";
    heart.style.animationDuration = (Math.random()*7+5) + "s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(()=>heart.remove(),12000);
}
setInterval(createHeart,300);

// HEART NAME DRAWING
const canvas=document.getElementById("heartCanvas");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

function drawHeart(t){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    for(let i=0;i<Math.PI*2;i+=0.01){
        const x=16*Math.pow(Math.sin(i),3);
        const y=13*Math.cos(i)-5*Math.cos(2*i)-2*Math.cos(3*i)-Math.cos(4*i);
        ctx.lineTo(canvas.width/2+x*10,canvas.height/2-y*10);
    }
    ctx.strokeStyle="rgba(255,0,80,0.5)";
    ctx.lineWidth=3;
    ctx.stroke();

    ctx.font="40px Arial";
    ctx.fillStyle="white";
    ctx.fillText("LORETTA",canvas.width/2-90,canvas.height/2+10);
}
drawHeart();

// FINAL MESSAGE TYPING
const finalTitleText = "To My One and Only ❤️";
const finalText = "Being with you makes my life magical 💖\nThank you for being my everything ✨ \n I Love you Loretta";

function typeFinalMessage(){
    let k=0, l=0;
    const titleEl = document.getElementById("finalTitle");
    const textEl = document.getElementById("finalText");

    function typeTitleChar(){
        if(k < finalTitleText.length){
            titleEl.innerHTML += finalTitleText.charAt(k);
            k++;
            setTimeout(typeTitleChar,80);
        } else {
            typeTextChar();
        }
    }

    function typeTextChar(){
        if(l < finalText.length){
            let char = finalText.charAt(l);
            if(char === "\n") char = "<br>";
            textEl.innerHTML += char;
            l++;
            setTimeout(typeTextChar,35);
        }
    }

    typeTitleChar();
}
