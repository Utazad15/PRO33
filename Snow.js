class Snow{
    constructor(x,y,width,height){
        var options = {
            restitution: 0.04
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("snow4.webp");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        scale(0.1);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}