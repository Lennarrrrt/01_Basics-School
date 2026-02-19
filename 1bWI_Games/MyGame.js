// MyGame - Example implementation of Game interface

class MyGame extends Game {
  x = 650;
  y = 450;
  directionX = 0;
  directionY = 0;
  circley = 100;
  circlex = 0;
  circledirection = 1;
  epilipsey = 0;
  epilipsex = 250;
  epilipsedirection = 1;

  init() {
    console.log("Game started!");
  }

  update(deltaTime) {
    if (this.x >= 600 && this.y >= 400) {
      this.directionX = -1;
      this.directionY = 0;
    }
    if (this.x >= 600 && this.y <= 150) {
      this.directionX = 0;
      this.directionY = 1;
    }
    if (this.x <= 150 && this.y <= 150) {
      this.directionX = 1;
      this.directionY = 0;
    }
    if (this.x <= 150 && this.y >= 400) {
      this.directionX = 0;
      this.directionY = -1;
    }
    if (this.directionX === 1) { this.x += 500 * deltaTime; }
    if (this.directionX === -1) { this.x -= 500 * deltaTime; }
    if (this.directionY === -1) { this.y -= 500 * deltaTime; }
    if (this.directionY === 1) { this.y += 500 * deltaTime; }

    if (this.circley >= 450) {
      this.circledirection = -1;
    }
    if (this.circley <= 100) {
      this.circledirection = 1;
    }
    this.circley += this.circledirection * 500 * deltaTime;

    if (this.epilipsex >= 600) {
      this.epilipsedirection = -1;
    }
    if (this.epilipsex <= 150) {
      this.epilipsedirection = 1;
    }
    this.epilipsex += this.epilipsedirection * 500 * deltaTime;
  }

  render(ctx) {
    ctx.strokeStyle = "#ffffff";
    ctx.strokeRect(this.x, this.y, 100, 100);
    ctx.fillStyle = "#ffffff";
    ctx.font = "16px Arial";
    ctx.fillText("Hello You!", 100, 100,);
    ctx.strokeRect(this.circlex, this.circley, 50, 50);
    ctx.strokeRect(this.epilipsex, this.epilipsey, 100, 50);
  }
}

const game = new MyGame();

const framework = new GameFramework(game, 800, 600);
framework.start();