class Ball{

    constructor(x,y,r){
        var ball_options = {
            isStatic : false,
            restitution:0.3,
            friction: 0,
            density: 1.2
        }

        this.body = Bodies.circle(x,y,r,ball_options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world,this.body)
        
    }
    display(){
        var pos = this.body.position;
        push ()
        ellipseMode(RADIUS);
        fill ("ORANGE");
        ellipse (pos.x,pos.y,this.r,this.r)
        pop ()
    }
}