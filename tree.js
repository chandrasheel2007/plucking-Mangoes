class Tree{

    constructor(){
   
        this.image = loadImage("images/tree.png");
      
    }

    display(){

        push();
        imageMode(CENTER);
        image(this.image, 1600, 515, 800, 800);
        pop();

    }

}