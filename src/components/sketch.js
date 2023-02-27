import p5 from "p5";

export default function sketch(p) {
  let particles = [];

  p.setup = function () {
    p.frameRate(24);
    p.createCanvas(p.displayWidth, p.displayHeight);
    for (let i = 0; i < 1200; i++) {
      particles.push(new Particle(p.random(p.width), p.random(p.height)));
    }
  };

  //Continuously runs update function on each particle and then draws the new instance
  p.draw = function () {
    p.background(128, 128, 128, 0.51);
    particles.forEach((particle) => {
      particle.update();
      particle.show();
    });
  };

  class Particle {
    //Constructor function that creates and initializes an object instance of a class; creates a new object and set values for any existing object properties
    constructor(x, y) {
      this.pos = p.createVector(x, y);
      this.vel = p.createVector(x, y);
      this.alpha = 0;
      this.size = 1;
      this.maxSpeed = 2;
    }

    update() {
      //Calculates the distance between inputs
      let d = p.dist(
        this.pos.x,
        this.pos.y,
        p.random(0, p.width),
        p.random(0, p.height)
      );
      //Input,lowerboundcurrent,upperboundcurrent,lowerbounddesired,upperbounddesired,
      let speed = p.map(d, 100, p.width, this.maxSpeed, 100);
      //Adjusts transparency value of particles
      this.alpha = 255;
      //Adjusts size of particles
      this.size = p.map(
        p.sin(p.frameCount * 0.05 + this.pos.x * 0.01 + this.pos.y * 0.01),
        -1,
        1,
        1,
        230
      );
      let angle =
        //Noise value between (0,1) at coordinates (x,y,z)
        p.noise(this.pos.x * 0.005, this.pos.y * 0.005, p.frameCount * 0.001) *
        p.TWO_PI *
        4;
      //Vector with direction=angle and magnitude=speed
      let direction = p5.Vector.fromAngle(angle, speed);
      this.vel.add(direction);
      this.vel.limit(this.maxSpeed);
      this.pos.add(this.vel);

      //Barrier
      if (this.pos.x >= p.width) this.vel.x = -10000 * this.vel.x;
      if (this.pos.y >= p.height) this.vel.y = -10000 * this.vel.y;
      if (this.pos.x <= 0) this.vel.x = -10000 * this.vel.x;
      if (this.pos.y <= 0) this.vel.y = -10000 * this.vel.y;
    }

    show() {
      p.noStroke();
      p.fill(0, 0, 0, this.alpha);
      p.ellipse(this.pos.x, this.pos.y, this.size * 2);
    }
  }
}
