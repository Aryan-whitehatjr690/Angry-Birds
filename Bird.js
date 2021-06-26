class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.bird2=loadImage("sprites/birdYellow.png");
    this.bird3=loadImage("sprites/birdBlue.png");

    this.trajectory =[];
  }

  displayRed() {

    var angle=this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }

  displayBlue() {

    var angle=this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.bird3,0,0,this.width,this.height);
    pop();
  }

  displayYellow() {

    var angle=this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.bird2,0,0,this.width,this.height);
    pop();
  }
  
  displayTrajectory(){
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
      for(var i=0; i<this.trajectory.length; i++){
      push()  ;   
      this.Visibility=this.Visibility-0.5;
      tint(255,this.Visibility)
       image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
       pop();
    }
  }
}
