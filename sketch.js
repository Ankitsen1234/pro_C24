// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 30, 20, 40);
    cannon = new Tanker(150,40,50,50);
    cannonball = new ShootBall(200,200)
}

function draw() {
    background("blue");
    Engine.update(engine);

    ground.display();
    platform.display();
    cannon.display();
    cannonball.display();
}


function keyReleased() {
   
this.canonball.bodyA = null;
    
}