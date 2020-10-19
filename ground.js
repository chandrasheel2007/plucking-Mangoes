class Ground{

    constructor(x, y, w){

        var options = {

            isStatic: true


        }

        this.body = Bodies.rectangle(x, y, w, 100, options);
        World.add(world, this.body);


    }

    display(){

        var pos = this.body.position;
        

        push();

        noStroke();
        fill(0)
        translate(pos.x, pos.y);
        rect(0, 0, 2000, 100);

        pop();


    }






}