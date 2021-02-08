class BalleAvecVitesseEtAngle extends Balle {
  vitesse = 3;
  angle = 0;

  constructor(x, y, rayon, couleur, vitesse, angle) {
    // constructeur de la classe mère
    super(x, y, rayon, couleur);

    this.vitesse = vitesse;
    this.angle = angle;
  }
  draw(ctx) {
    // dessine la balle mais avec un vecteur direction/vitesse
    super.draw(ctx);

    ctx.save();
    ctx.fillRect(this.x-100, this.y,200, 5);

    // on dessine un trait dans la direction de la balle
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    // ctx.fillRect(500, 500, 50, 5);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(10 + this.vitesse * 5, 0);

    ctx.lineWidth = 3;
    ctx.stroke();

    // ctx.fillRect(500, 500, 50, 5);

    ctx.restore();

    // ctx.drawImage(image2,this.x,this.y);
    // ctx.restore();
    // var imgData = ctx.getImageData(this.x, this.y, 15+2, 15+2);
    // var pixels = imgData.data;
    // // console.log(imgData);
    // var n = pixels.length;
    // for (var i = 0; n = pixels.length, i < n; i += 4) {
    //   var red = pixels[i];
    //   var green = pixels[i+1];
    //   var blue = pixels[i+2];
    //   var alpha = pixels[i+3];
    // }
    // let a = 0;
    // if (red == 0 && green == 0 && blue == 0) {
    //   a = 1;
    // }
    // if (red == 169 && green == 169 && blue == 169) {
    //   a = 1;
    // }
    // console.log(a);
  }

  move() {
    this.x += this.vitesse * Math.cos(this.angle) * 10;
    // this.y += this.vitesse * Math.sin(this.angle);
    // if(a === 1){
    //   console.log(a);
    // }
    // if(a === 0){
    // this.x += this.vitesseX;
    // this.y += this.vitesseY;
    // console.log(a);
    // }
  }


}
