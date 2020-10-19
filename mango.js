class Mango{

    constructor(x, y, w, h){


        var options = {

            isStatic: true,
            restitution: 0,
            friction: 1


        }

        
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);

        this.image = loadImage("images/mango.png");



    }

    display(w, h){


        var pos = this.body.position;
        var angle = this.body.angle


        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, w, h);
        pop();

    }
}