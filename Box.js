class Box 
{
    constractor (x,y,width,height) {

        var option = {isStatice: true}

        this.Body = Bodies.rectangle(x,y,width,height.option);
        World.add(world.this.Body);

        this.width = width;
        this.height = height;
    }

    display() {

        var pos = this.Body.position;
        fill("red");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        
    }
}