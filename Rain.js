class Rain{
	constructor(x,y){
		var options = {
			'restitution':0.8,
			'friction':1.0,
			'density':0.1
		}
		this.x = x;
		this.y = y;
		this.r=10;
        this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);
	}
	display(){
		var pos=this.body.position;
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()

	}
	update(){
		if(pos.x>600){
			Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});

		}
	}	
}