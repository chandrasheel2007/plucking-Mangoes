class Stone{

    constructor(x, y){


        var options = {

            restitution: 0,
            friction: 1,
            density: 1.2


        }

        
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        World.add(world, this.body);

        this.image = loadImage("images/stone.png");


    }

    


    display(){

        

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);

        pop();



        

    }




}