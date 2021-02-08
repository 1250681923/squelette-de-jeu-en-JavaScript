window.onload = main;

let canvas;
let ctx;
let score = 0;
let etatJeu = "MenuPrincipal";
let x;
let y;

// ici on va stocker les objets graphiques du jeu, ennemis, etc.
let tableauDesBalles = [];
let balleChercheuse;
// programme principal
function main() {

  canvas = document.querySelector("#myCanvas");

  canvas.onmousedown = traiteMouseDown;
  // canvas.onmouseup = traiteMouseUp;
  canvas.onmousemove = traiteMouseMove;

  // document.onkeydown = traiteKeyDown;
  // document.onkeyup = traiteKeyUp;
 
  ctx = canvas.getContext("2d");

  loadAssets(startGame);

  // loadAssets(creerDesBalles);
  creerDesBalles(5);

  requestAnimationFrame(animationLoop);
}

function creerDesBalles(nb) {


  let tabCouleurs = ["red", "green", "yellow", "orange", "purple"];

  for (let i = 0; i < nb; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let r = Math.random() * 30;
    let indexCouleur = Math.floor(Math.random() * tabCouleurs.length);
    let couleur = tabCouleurs[indexCouleur];
    let vx = 3 + Math.random() * 3;
    // let vy = -5 + Math.random() * 10;
    let vy = -4;

    let b = new BalleAvecVitesseXY(x, y, r, couleur, vx, vy);

    // on ajoute la balle au tableau
    tableauDesBalles.push(b);
  }

  for (let i = 0; i < nb; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let r = Math.random() * 30;
    let indexCouleur = Math.floor(Math.random() * tabCouleurs.length);
    let couleur = tabCouleurs[indexCouleur];
    let vx = -3 - Math.random() * 3;
    // let vy = -5 + Math.random() * 10;
    let vy = -4;

    let b = new BalleAvecVitesseXY(x, y, r, couleur, vx, vy);

    // on ajoute la balle au tableau
    tableauDesBalles.push(b);
  }

  // on ajoute une balle chercheuse dans le tableau
  // image2 = assetsLoaded[1];
  balleChercheuse = new BalleChercheuse(500, 650, 8, "red", 0, 0);
  // tableauDesBalles.push(balleChercheuse);
}
// function afficheInfoJeu() {
//   ctx.save();
//   // ctx.fillStyle = "orange";
//   // ctx.font = "30pt Calibri";
//   // ctx.fillText("Niveau : " + niveauCourant, 400, 40);

//   // ctx.lineWidth = 2;
//   // ctx.strokeStyle = "red";
//   // ctx.strokeText("Niveau : " + niveauCourant, 400, 40);

//   // ctx.fillText(etatJeu, 300, 100);
//   ctx.restore();
// }

function startGame(assetsLoaded){

  image1 = assetsLoaded[0];
  image2 = assetsLoaded[1];
  requestAnimationFrame(animationLoop);
}


// animation à 60 images/s
function animationLoop() {
  // 1 on efface le canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  afficheInfoJeu(); // scores, niveau etc.

  switch (etatJeu) {
    case "MenuPrincipal":
      ctx.drawImage(image2,0,0);
      afficheMenuPrincipal();
      break;
    case "JeuEnCours":
      ctx.drawImage(image1,0,0);
      afficheInfoJeu();
      updateJeu();
      break;
    case "EcranChangementNiveau":
      ctx.drawImage(image2,0,0);
      afficheInfoJeu();
      afficheEcranChangementNiveau();
      break;
    case "GameOver":
      afficheEcranGameOver();
  }
  // new Circle(x,y,30,"orange");
  for (var i = 0; i < circleArr.length; i++) {
    circleArr[i].update() && circleArr[i].render();
  };

  // 5 On demande au navigateur de rappeler la fonction
  // animationLoop dans 1/60ème de seconde
  requestAnimationFrame(animationLoop);
}

function afficheInfoJeu() {
  ctx.save();
  ctx.fillStyle = "orange";
  ctx.font = "30pt Calibri";
  ctx.fillText("Score : " + score, 400, 40);

  ctx.lineWidth = 2;
  ctx.strokeStyle = "red";
  ctx.strokeText("Score : " + score, 400, 40);

  ctx.restore();
}

function afficheMenuPrincipal() {
  ctx.save();
  ctx.translate(0, 100);
  ctx.fillStyle = "red";
  ctx.font = "60pt Calibri";
  ctx.fillText("Bienvenu ! ", 300, 250);
  ctx.font = "30pt Calibri";
  ctx.fillText("Essayer d'attraper le ballon ! ", 250, 300);
  ctx.restore();
}

function afficheEcranChangementNiveau() {
  ctx.save();
  ctx.translate(0, 100);
  ctx.fillStyle = "red";
  ctx.font = "60pt Calibri";
  ctx.fillText("Continuez ! ", 300, 250);

  ctx.restore();
}

function afficheEcranGameOver() {}

function niveauSuivant() {
  console.log("NIVEAU SUIVANT");
  niveauCourant++;
  creerDesBalles(niveauCourant + 1);
  etatJeu = "JeuEnCours";
}

function updateJeu() {
  updateBalles();

  if (niveauFini()) {
    etatJeu = "EcranChangementNiveau";
  }
}

function niveauFini() {
  return tableauDesBalles.length === 0;
}


function updateBalles() {
  balleChercheuse.draw(ctx);
  balleChercheuse.move();
  // var positonX = balleChercheuse.getX();
  // utilisation d'un itérateur sur le tableau
  tableauDesBalles.forEach((b) => {
    b.draw(ctx);
    traiteCollisionsBalleAvecBords(b);
    traiteCollisionBalleAvecSol(b);
    traiteCollisionsBalleAvecPlat(b);
    b.move();
  });
}













