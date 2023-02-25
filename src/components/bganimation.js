import React, { Component } from 'react';
import p5 from 'p5';

class ParticleSketch extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      frameCount: 0,
      particles: [],
    };
  }

  componentDidMount() {
    // Initialize a new p5 instance and store it in component state
    this.p5Instance = new p5(this.sketch, this.canvasRef.current);
  }

  componentWillUnmount() {
    // Remove p5 instance on component unmount
    this.p5Instance.remove();
  }

  sketch = (p) => {
    // Initialize particles array
    for (let i = 0; i < 7500; i++) {
      this.state.particles.push(new Particle(p.random(p.width), p.random(p.height)));
    }

    p.draw = () => {
      // Update state variables
      this.setState((prevState) => ({ frameCount: prevState.frameCount + 1 }));

      // Set the background color with alpha value
      p.background(255, 255, 255, 1);

      // Iterate through particles array and update/show each particle
      this.state.particles.forEach((particle) => {
        particle.update(p);
        particle.show(p);
      });
    };
  };

  render() {
    return <div ref={this.canvasRef} />;
  }
}

class Particle {
  constructor(x, y) {
    this.pos = p5.createVector(x, y);
    this.vel = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
    this.alpha = 0;
    this.size = 0.01;
    this.maxSpeed = 5;
  }

  update(p) {
    let d = p.dist(this.pos.x, this.pos.y, this.props.mouseX, this.props.mouseY);
    let speed = p.map(d, 0, p.width, this.maxSpeed, 0);
    this.alpha = p.map(
      p.sin(
        this.props.frameCount * 0.05 + this.pos.x * 0.01 + this.pos.y * 0.01
      ),
      -1,
      1,
      125,
      255
    );
    this.size = p.map(
      p.sin(
        this.props.frameCount * 0.05 + this.pos.x * 0.01 + this.pos.y * 0.01
      ),
      -1,
      1,
      1,
      4
    );
    let angle =
      p.noise(this.pos.x * 0.005, this.pos.y * 0.005, this.props.frameCount * 0.001) *
      p.TWO_PI *
      4;
    let direction = p5.Vector.fromAngle(angle, speed);
    this.vel.add(direction);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
}
}

export default ParticleSketch;