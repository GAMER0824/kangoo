/*--------------------------------------------------------*/
var PLAY = 1;
var END = 0;
var WIN = 2;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var jungle, invisiblejungle;
var invisibleWall
var shrubsGroup

var obstaclesGroup, obstacle1;

var score=0;

var gameOver, restart;

function preload(){
  kangaroo_running =   loadAnimation("assets/kangaroo1.png","assets/kangaroo2.png","assets/kangaroo3.png");
  kangaroo_collided = loadAnimation("assets/kangaroo1.png");
  jungleImage = loadImage("assets/bg.png");
  shrub1 = loadImage("assets/shrub1.png");
  shrub2 = loadImage("assets/shrub2.png");
  shrub3 = loadImage("assets/shrub3.png");
  obstacle1 = loadImage("assets/stone.png");
  gameOverImg = loadImage("assets/gameOver.png");
  restartImg = loadImage("assets/restart.png");
  jumpSound = loadSound("assets/jump.wav");
  collidedSound = loadSound("assets/collided.wav");
}

function setup() {
  createCanvas(800, 400);

  jungle = createSprite(400,100,400,20);
  jungle.addImage("jungle",jungleImage);
  jungle.scale=0.3
  jungle.x = width /2;

  shrubsGroup = new Group();
  obstaclesGroup = new Group();

  invisibleWall = createSprite(800,400,20,20)
  invisibleWall = visible = false

  kangaroo = createSprite(200,100,20,20)
  kangaroo = addAnimation("kangaroo",kangaroo_running)
  kangaroo.scale = 0.3
  
  
  score = 0;

}
shrubsGroup = newGroup(shrub1,shrub2,shrub3)
obstaclesGroup = newGroup(obstacle1)


function draw() {
  background(255);

  kangaroo.x = camera.position.x -270

  if (gameState === PLAY) {

    jungleImage.velocityX = -4;

    if (jungleImage.x < 0) {
      jungleImage.x = jungleImage.width / 2;
      }

      if (keyDown("space") && kangaroo.y >= 150) {
        kangaroo.velocityY = -13;
      }

      kangaroo.velocityY = kangaroo.velocityY + 0.8
    }
  

  drawSprites();

}
function spwanShrubs() {
  if (frameCount % 150 === 0) {
    var spwanShrubs = createSprite(900, 500, 10, 40);
    spwanShrubs.velocityX = 6

    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1: spwanShrubs.addImage(shrub1);
        break;
      case 2: spwanShrubs.addImage(shrub2);
        break;
      case 3: spwanShrubs.addImage(shrub3);
      default: break;
    }
    shrubsGroup.lifetime = 400
  }

}
function spawnObstacles() {
  if (frameCount % 150 === 0) {
    var spawnObstacles = createSprite(900, 500, 10, 40);
    spawnObstacles.velocityX = 6

    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1: spawnObstacles.addImage(shrub1);
        break;
      case 2: spawnObstacles.addImage(shrub2);
        break;
      case 3: spawnObstacles.addImage(shrub3);
      default: break;
    }
    obstaclesGroup.lifetime = 400
  }

}