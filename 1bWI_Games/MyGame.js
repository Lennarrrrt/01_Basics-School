// MyGame - Example implementation of Game interface

class MyGame extends Game {
  x = 50;
  y = 0;

  init() {
    console.log("Game started!");
  }

  update(deltaTime) {
    if (this.x < 0)
      while (this.x < 750) { this.x += 100 * deltaTime; }

    else
      while (this.x > 0) { this.x += -100 * deltaTime; }

    if (this.y < 550)
      while (this.y < 550) { this.y += 50 * deltaTime; }
    else
      while (this.y > 0) { this.y += -50 * deltaTime; }
    console.log(deltaTime);

  }

  render(ctx) {
    ctx.fillStyle = "#FF66aa";
    ctx.fillRect(this.x, this.y, 50, 50);
    ctx.fillRect(0, 550, 1000, 50);
  }
}

const game = new MyGame();

const framework = new GameFramework(game, 800, 600);
framework.start();