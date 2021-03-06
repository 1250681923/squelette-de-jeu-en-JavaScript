class BalleChercheuse extends BalleAvecVitesseEtAngle {
  target = {};
  // img;

  constructor(x, y, rayon, couleur) {
    // constructeur de la classe mère
    super(x, y, rayon, couleur, 1, 0);
    // this.img = img;
  }

  setTarget(x, y) {
    this.target.x = x;
    this.target.y = y;
  }

  distanceToTarget() {
    let dx = this.target.x - this.x;
    let dy = this.target.y - this.y;

    return Math.sqrt(dx * dx + dy * dy);
  }

  move() {
    // si aucune cible n'est définie, on ne fait rien
    if (this.target.x === undefined) return;

    // on se dirige vers la cible
    // 1 - on calcule l'angle entre la position courante de la balle
    // et la cible
    let dx = this.target.x - this.x;
    let dy = this.target.y - this.y;
    this.angle = Math.atan2(dy, dx);

    if (this.distanceToTarget() < 3) return;
  
    super.move();
   
  }
  getX(){
    return this.x;
  }
}
