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
      this.vel = p.createVector(p.random(-1, 1), p.random(-1, 1));
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
        4
      );
      let angle =
        //Noise value between (0,1) at coordinates (x,y,z)
        p.noise(this.pos.x * 0.005, this.pos.y * 0.005, p.frameCount * 0.001) *
        p.TWO_PI *
        4;

      //Vector with direction=angle and magnitude=speed
      let directionandmagnitude = p5.Vector.fromAngle(angle, speed);
      this.vel.add(directionandmagnitude);
      this.vel.limit(this.maxSpeed);
      this.pos.add(this.vel);

  // if (this.pos.x < 0) {
  //   this.pos.x = p.width;
  // } else if (this.pos.x > p.width) {
  //   this.pos.x = 0;
  // }

  // if (this.pos.y < 0) {
  //   this.pos.y = p.height;
  // } else if (this.pos.y > p.height) {
  //   this.pos.y = 0;
  // }
    }

    show() {
      p.noStroke();
      p.fill(0, 0, 0, this.alpha);
      p.ellipse(this.pos.x, this.pos.y, this.size * 2);
    }
  }
}

// import p5 from "p5";

// export default function sketchnew(p) {
//   class Particle {
//     // setting the coordinates, radius and the
//     // speed of a particle in both the coordinates axes.
//     constructor() {
//       this.x = p.random(0, p.width);
//       this.y = p.random(0, p.height);
//       this.r = 5
//       this.l = 50
//       this.angle = p.random(0,p.TWO_PI)
//       this.xAngle = p.cos(this.angle)
//       this.yAngle = p.sin(this.angle)
//       this.xSpeed = p.random(-1, 1);
//       this.ySpeed = p.random(-1, 1);
//       this.maxSpeed = 2;
//       this.pos = p.createVector(this.x, this.y);
//       this.vel = p.createVector(this.x, this.y);
//       this.trail = [];
//     }

//     // creation of a particle.
//     createParticle() {
//       p.noStroke();
//       p.fill(0, 0, 0);
//       p.circle(this.x, this.y, this.r);
//     }

//     // setting the particle in motion.
//     moveParticle() {
//       if (this.x < 0 || this.x > p.width) this.xSpeed *= -1;
//       if (this.y < 0 || this.y > p.height) this.ySpeed *= -1;
//       this.x += this.xSpeed;
//       this.y += this.ySpeed;
//       this.trail.push(p.createVector(this.x, this.y));
//     }

//     //updating the attributes of the particles
//     update() {
//         // this.r = p.map(
//         // p.sin(p.frameCount * 0.05 + this.xSpeed * 0.01 + this.ySpeed * 0.01),
//         // -1, 1, 1, 200) * 2;
//         this.x = p.random(this.x - 0.01, this.x + 0.01);
//         this.y = p.random(this.y - 0.01, this.y + 0.01);
//         let angle = p.noise(
//             this.x * 0.005,
//             this.y * 0.005, p.frameCount * 0.001) 
//             * p.TWO_PI * 4;
//     }

//     drawTail() {
//         for (let i = 0; i < this.trail.length; i++) {
//             p.noStroke();
//             p.fill(0, 0, 0, 255 - i * (255 / this.trail.length));
//             p.circle(this.trail[i].x, this.trail[i].y, this.r * (i / this.trail.length))
//         }
//     }

//   }

//   // an array to add multiple particles
//   let particles = [];

//   p.setup = function () {
//     p.frameRate(60)
//     p.createCanvas(p.displayWidth, p.displayHeight);
//     for (let i = 0; i < p.width / 10; i++) {
//       particles.push(new Particle());
//     }
//   };

//   p.draw = function () {
//     p.background(127, 127, 127);
//     for (let i = 0; i < particles.length; i++) {
//       particles[i].createParticle();
//       particles[i].moveParticle();
//       particles[i].update();
//       particles[i].drawTail();
//       // particles[i].pushParticles();
//     }
//   };
// }
