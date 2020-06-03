class Ball{
    constructor(x, y, radius, color) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.color = color;
        World.add(world, this.body);
      }
      display(){
          var pos = this.body.position;
          pos.x = mouseX;
          pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}