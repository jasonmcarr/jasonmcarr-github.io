import p5 from "p5";

export default function sketch(p) {
  let particles = [];

  p.setup = function () {
    p.frameRate(24);
    p.createCanvas(p.displayWidth, p.displayHeight);
    for (let i = 0; i < 610; i++) {
      particles.push(new Particle(p.random(p.width), p.random(p.height)));
    }
  };

  let randomSize = p.random(4, 240);

  p.draw = function () {
    p.background(256, 256, 256, 1);
    particles.forEach((particle) => {
      particle.update();
      particle.show();
    });
  };

  class Particle {
    constructor(x, y) {
      this.pos = p.createVector(x, y);
      this.vel = p.createVector(p.random(-1, 1), p.random(-1, 1));
      this.alpha = 0;
      this.size = 1;
      this.maxSpeed = 2;
      this.repulsionStrength = 5000;
    }

    update() {
      let repulsionForce = p.createVector(0, 0);
      particles.forEach((otherParticle) => {
        if (otherParticle !== this) {
          let distance = p.dist(
            this.pos.x,
            this.pos.y,
            otherParticle.pos.x,
            otherParticle.pos.y
          );
          if (distance < 500) {
            // Only consider particles within a certain range
            let direction = p5.Vector.sub(this.pos, otherParticle.pos);
            direction.normalize();
            let magnitude = this.repulsionStrength / (distance * distance);
            direction.mult(magnitude);
            repulsionForce.add(direction);
          }
        }
      });

      let d = p.dist(this.pos.x, this.pos.y, p.mouseX / 2, p.mouseY / 2);
      let speed = p.map(d, 0, p.width, this.maxSpeed, 0);
      this.alpha = p.map(
        p.cos(p.frameCount * 0.05 + this.pos.x * 0.01 + this.pos.y * 0.01),
        -1,
        1,
        125,
        255
      );
      this.size = p.map(
        p.cos(p.frameCount * 0.05 + this.pos.x * 0.01 + this.pos.y * 0.01),
        -1,
        1,
        1,
        randomSize
      );

      let angle =
        p.noise(this.pos.x * 0.005, this.pos.y * 0.005, p.frameCount * 0.001) *
        p.TWO_PI *
        4000;
      let direction = p5.Vector.fromAngle(angle, speed);
      this.vel.add(direction);
      this.vel.limit(this.maxSpeed);
      this.pos.add(this.vel);
      this.vel.add(repulsionForce);

      // // Bounce off edges
      // if (this.pos.x < 0 || this.pos.x > p.width) {
      //   this.vel.x *= -8;
      //   this.pos.x = p.constrain(this.pos.x, -1000, p.width);
      // }
      // if (this.pos.y < 0 || this.pos.y > p.height) {
      //   this.vel.y *= -8;
      //   this.pos.y = p.constrain(this.pos.y, -1000, p.height);
      // }
    }

    show() {
      p.noStroke();
      p.fill(0, 0, 0, this.alpha);
      p.ellipse(this.pos.x, this.pos.y, this.size * 2);
    }
  }
}
