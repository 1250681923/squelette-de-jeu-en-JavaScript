var circleArr = [];

function Circle(x,y,r,color){
  this.x = x;
  this.y = y;
  this.r = r;
  this.color = "rgb("+ (parseInt(Math.random() * 240 ) + 9) + ","+ (parseInt(Math.random() * 220 )+18) +",203)";

  this.dx = Math.random() * 12 - 7;
  this.dy = Math.random() * 12 - 7;

  circleArr.push(this);
}

Circle.prototype.render = function(){
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
  ctx.fillStyle = this.color;
  ctx.fill();
}

Circle.prototype.update = function(){
  this.x += this.dx;
  this.y += this.dy;
  this.r--;
  if(this.r < 0){
      for (var i = 0; i < circleArr.length; i++) {
          if (circleArr[i] === this) {
              circleArr.splice(i,1);
          };
      }
      return false;
  }
  return true;
}
