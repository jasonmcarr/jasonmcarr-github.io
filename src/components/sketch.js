import p5 from "p5";

export default function sketch(p) {
  let particles = [];

  p.setup = function () {
    p.createCanvas(p.displayWidth, p.displayHeight);
    for (let i = 0; i < 7500; i++) {
      particles.push(new Particle(p.random(p.width), p.random(p.height)));
    }
  };

  p.draw = function() {
    p.background(128,128,128,0.51);
    particles.forEach((particle) => {
      particle.update();
      particle.show();
    });
  }
  
  class Particle {
    constructor(x, y) {
      this.pos = p.createVector(x, y);
      this.vel = p.createVector(p.random(-1, 1), p.random(-1, 1));
      this.alpha = 0;
      this.size = 0.01;
      this.maxSpeed = 2;
    }
  
    update() {
      let d = p.dist(this.pos.x, this.pos.y, p.mouseX/2, p.mouseY/2);
      let speed = p.map(d, 0, p.width, this.maxSpeed, 0);
      this.alpha = p.map(
        p.sin(p.frameCount * 0.05 + this.pos.x * 0.01 + this.pos.y * 0.01),
        -1,
        1,
        125,
        255
      );
      this.size = p.map(
        p.sin(p.frameCount * 0.05 + this.pos.x * 0.01 + this.pos.y * 0.01),
        -1,
        1,
        1,
        4
      );
      let angle =
        p.noise(this.pos.x * 0.005, this.pos.y * 0.005, p.frameCount * 0.001) *
        p.TWO_PI*4
      let direction = p5.Vector.fromAngle(angle, speed);
      this.vel.add(direction);
      this.vel.limit(this.maxSpeed);
      this.pos.add(this.vel);
  
      // Bounce off edges
      if (this.pos.x < 0 || this.pos.x > p.width) {
        this.vel.x *= -8;
        this.pos.x = p.constrain(this.pos.x, -1000, p.width);
      }
      if (this.pos.y < 0 || this.pos.y > p.height) {
        this.vel.y *= -8;
        this.pos.y = p.constrain(this.pos.y, -1000, p.height);
      }
    }
  
    show() {
      p.noStroke();
      p.fill(0, 0, 0, this.alpha);
      p.ellipse(this.pos.x, this.pos.y, this.size*2);
    }
  }
}