class Box {
  
    constructor() {
      this.x = 100;
      this.y = 200;
      this.width = 50;
      this.height = 50;
    }

    show(){
      rect(this.x,this.y,this.width,this.height);
    }
    
    set_speed(v){
      this.x = this.x+v;
    }
  }

  
