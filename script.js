// Play background music when user clicks first button
const mainMusic = document.getElementById("mainMusic");

function openPopup(){
    document.getElementById("popup").style.display="block";
    // play main music after user interaction
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

// POPUP
function openPopup(){
    document.getElementById("popup").style.display="block";
}
function yesAnswer(){

    // hide the main page
    document.querySelector("audio").pause();

    document.querySelector(".container").style.display="none";
    document.querySelector(".hearts").style.display="none";
    document.getElementById("popup").style.display="none";

    // show video section
    const section=document.getElementById("videoSection");
    section.style.display="block";

    // play music
    const music=document.getElementById("finalMusic");
    music.play();

    // playlist
    const videos=[
        {src:"video1.mp4",msg:"Every moment with you is my favorite memory ❤️"},
    
    ];

    let index=0;
    const player=document.getElementById("player");
    const text=document.getElementById("videoMessage");

    function playVideo(i){
        player.src=videos[i].src;
        text.innerHTML=videos[i].msg;
        player.muted = true;
        player.play();
    }

    playVideo(index);


    player.onended = function(){
    index++;
    if(index < videos.length){
        playVideo(index);
    } else {
        // Hide video player and text
        player.style.display = "none";
        text.style.display = "none";

        // Show final message
        const fm = document.getElementById("finalMessage");
        fm.style.display = "block";
        setTimeout(()=>{ fm.classList.add("show"); }, 100);

        // Keep falling hearts visible and increase density
        const heartsInterval = setInterval(()=>{
            createHeart();
        }, 150); // faster hearts
    }
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

// COUNTDOWN (change date!)
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
    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=(Math.random()*20+10)+"px";
    heart.style.animationDuration=(Math.random()*5+5)+"s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(()=>heart.remove(),10000);
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


