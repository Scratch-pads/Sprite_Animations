let playerState = "idle";
const dropdown = document.getElementById("animations");
dropdown.addEventListener("change", (e)=>{
    playerState = e.target.value;
});

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 5230/10;

let spriteAnimations = [];
let animationStates = [
    {
        name: "idle",
        frames: 7,
    },
    {
        name: "jump",
        frames: 7,
    },
    {
        name: "fall",
        frames: 7,
    },
    {
        name: "run",
        frames: 8,
    },
    {
        name: "daze",
        frames: 10,
    },
    {
        name: "sit",
        frames: 5,
    },
    {
        name: "roll",
        frames: 7,
    },
    {
        name: "bite",
        frames: 7,
    },
    {
        name: "KO",
        frames: 11,
    },
    {
        name: "damaged",
        frames: 4,
    },
]

animationStates.forEach((state, index)=>{
    let frames = {
        loc: []
    };
    for (let j=0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY})
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations)


let gameFrame = 0;
const staggerFrames = 4;

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = position * spriteWidth;
    let frameY = spriteAnimations[playerState].loc[0].y;

    ctx.drawImage(playerImage,
        frameX,
        frameY,
        spriteWidth, spriteHeight,
        0,
        0,
        spriteWidth,
        spriteHeight);

    gameFrame++;

    requestAnimationFrame(animate)
}

animate();


