class Rope{

    constructor(pointA, bodyB){

        var options = {

            pointA: pointA,
            bodyB: bodyB.body,
            length: 20,
            stiffness: 0.004,



        }

        this.rope = Constraints.create(options);
        World.add(world, this.rope);



    }

    fly(){

        this.rope.bodyB = null;


    }

    attach(BodyA){

        
        this.rope.bodyB = BodyA.body;



    }

    display(){

        if(this.rope.bodyB){

        var A = this.rope.pointA;
        var B = this.rope.bodyB.position;


        strokeWeight(5);
        stroke(255);
        line(A.x, A.y, B.x, B.y);


        }

    }




}