// MyGame - Example implementation of Game interface

class MyGame extends Game {
  x = 0;
  y = 0;
  directionX = 1;
  directionY = 1;
  init() {
    console.log("Game started!");
  }

  update(deltaTime) {
    if (this.x >= 750) { this.directionX = -1; }
    if (this.x <= 0) { this.directionX = 1; }
    if (this.y >= 550) { this.directionY = -1; }
    if (this.y <= 0) { this.directionY = 1; }
    if (this.directionX === 1) { this.x += 100 * deltaTime; }
    if (this.directionX === -1) { this.x -= 100 * deltaTime; }
    if (this.directionY === -1) { this.y -= 50 * deltaTime; }
    if (this.directionY === 1) { this.y += 50 * deltaTime; }

  }

  render(ctx) {
    ctx.fillStyle = "#FF66aa";
    ctx.fillRect(this.x, this.y, 50, 50);
  }
}

const game = new MyGame();

const framework = new GameFramework(game, 800, 600);
framework.start();