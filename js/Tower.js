
class Tower {
    constructor(x, y, width, height) {
      var options = {
//set the static body(challenge 2)
      isStatic:true
      };
        //Load the image of the tower(challenge 5)
        this.towerImg=loadImage("assets/tower.png")
this.width = width;
    this.height = height;
    this.tower = Bodies.rectangle(x,y,this.width,this.height,options)
      //write the instruction to create a rectangular tower body(challenge1)
      World.add(world,this.tower)
      //add the option inside the rectangular body(challenge 2)
      //Add this object to the World(challenge 2)
    }
display() {
    var pos = this.tower.position;
    var angle = this.tower.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
            //change the rect as image(challenge 5)

//display the rect function (challenge 3)
image(this.towerImg,0,0,this.width,this.height)
  pop();
  }
}
