class Drop{
    constructor(x1,y1,w,h){
        var options = {
            'density' : 0.5,
            'airFriction': 0.05
        }
        this.body = Bodies.rectangle(x1,y1,w,h,options);
        this.w = width;
        this.h = height;
        World.add(world,this.body);
    }
   display(){
       var pos = this.body.position;
       push();
       translate(pos.x1,pos.y1,pos.x2,pos.y2);
       rotate(angle);
       strokeWeight(3);
       stroke("purple");
       fill("purple");
       rect(0,0,this.width,this.height);
       pop();
   }
}
