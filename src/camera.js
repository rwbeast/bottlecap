/* camera.js */

const round = Math.round;

export class Camera {

  constructor(ctx, x = 0, y = 0, dx = 0, dy = 0) {
  
    this.ctx = ctx;

    this.position = { x, y };
    
    this.cx = round(ctx.canvas.width / 2) - dx;
    this.cy = round(ctx.canvas.height / 2) - dy;
  
  }

  attach() {
    
    this.ctx.save();
   
    this.ctx.translate(this.cx - this.position.x, this.cy - this.position.y);
  
  }

  detach() {
    
    this.ctx.restore();
  
  }

  lookAt(x, y) {
    
    this.position.x = x || this.position.x;
    
    this.position.y = y || this.position.y;

  }

}
