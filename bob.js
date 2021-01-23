class Bob {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'friction': 0,
            'density': 1.2
        }
        this.x = x;
        this.y = y;
        this.radius = 50;
        this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
        World.add(world, this.body);
    }
    display() {
        var bobPosition = this.body.position;

        push()
        translate(bobPosition.x, bobPosition.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255, 0, 255);
        ellipse(0, 0, this.radius, this.radius);
        pop()
    }
}