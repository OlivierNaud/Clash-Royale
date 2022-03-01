// DONNEE DU DECK
// Deck de 8 cartes 

let tableau1 =  [

{ image : 'img/BowlerCard.png', elexir : 5},
{ image : 'img/futBarbare.png', elexir : 2},
{ image : 'img/BanditCard.png', elexir : 3},
{ image : 'img/ElectroWizardCard.png', elexir : 4},
{ image : 'img/zappies.png', elexir : 4},
{ image : 'img/Card_icon_Mega_Minion.png', elexir : 3},
{ image : 'img/Mother-witchCard.png', elexir : 4},
{ image : 'img/Card_icon_P.E.K.K.A..png', elexir : 7}

];

// CONSTRUCTION

// 3 tableaux : 1 pour l'ensemble des cartes (tableau 1), 1 pour la face caché des cartes (tableau 2), 1 pour la face visible des cartes (tableau 3)

// ETAPE 1 : melanger le deck sur le tableau 1, les 4 premières cartes dans le tableau 2 , les 4 autres dans le tableau 3

// melange du deck
function shuffle(array) {

  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;

  }
  return array;
}

shuffle(tableau1);

// 4 premières cartes tableau 2 (cartes visible)

let tableau2 = tableau1.splice(0,4);

console.log(tableau2)

// 4 dernières cartes tableau 3 (cartes non visible)

let tableau3 = tableau1.splice(0,4);

console.log(tableau3)

let body = document.getElementById('body')

// Création d'objet pour la carte caché

let nextCard = {
	backNextCard : {
		htmlElement : document.querySelector('.backNextCard'),
		cell : document.createElement("p"),
		createImgCard : document.createElement("img"),
		createImgElexir : document.createElement("img"),

	}
}

// Création d'objets pour les cartes visibles

let blocs = {
	blocFirstCard : {
		htmlElement : document.querySelector('.blocFirstCard'), 
		isClicked : false,
		cell : document.createElement("p"),
		createImgCard : document.createElement("img"),
		createImgElexir : document.createElement("img"),
		index : 0,
	},

	blocSecondCard : {
		htmlElement : document.querySelector('.blocSecondCard'), 
		isClicked : false,
		cell : document.createElement("p"),
		createImgCard : document.createElement("img"),
		createImgElexir : document.createElement("img"),
		index : 1,
	},

	blocThirdCard : {
		htmlElement : document.querySelector('.blocThirdCard'), 
		isClicked : false,
		cell : document.createElement("p"),
		createImgCard : document.createElement("img"),
		createImgElexir : document.createElement("img"),
		index : 2,
	},

	blocFourthCard : {
		htmlElement : document.querySelector('.blocFourthCard'), 
		isClicked : false,
		cell : document.createElement("p"),
		createImgCard : document.createElement("img"),
		createImgElexir : document.createElement("img"),
		index : 3,
	}
}

// Construction des fonctions

function barre () {

	let progress = document.querySelector('.progress')
	let progressDiv = document.querySelector('progress')
	let oui = setInterval(progression, 300);
	let runElexir = document.querySelector('.runElexir')

	let barWhiteFirstCard = document.querySelector('.barWhiteBlocFirstCard')
	let barWhiteSecondCard = document.querySelector('.barWhiteBlocSecondCard')
	let barWhiteThirdCard = document.querySelector('.barWhiteBlocThirdCard')
	let barWhiteFourthCard = document.querySelector('.barWhiteBlocFourthCard')

	let transparentBar = document.querySelector('.transparentBar')

	// Fonction de la progress bar

	function progression () {

		if (progress.value < 100) {
			progress.value++;
			progressDiv.classList.add('progress');
		}

		if (progress.value < 10) {
			runElexir.textContent = '0';
		}

		if (progress.value >= 10) {
			runElexir.textContent = '1';
		}

		if (progress.value >= 20) {
			runElexir.textContent = '2';
		}

		if (progress.value >= 30) {
			runElexir.textContent = '3';
		}

		if (progress.value >= 40) {
			runElexir.textContent = '4';
		}

		if (progress.value >= 50) {
			runElexir.textContent = '5';
		}

		if (progress.value >= 60) {
			runElexir.textContent = '6';
		}

		if (progress.value >= 70) {
			runElexir.textContent = '7';
		}

		if (progress.value >= 80) {
			runElexir.textContent = '8';
		}

		if (progress.value >= 90) {
			runElexir.textContent = '9';
		}

		if (progress.value == 100) {
			runElexir.textContent = '10';

			// Méthode pour bouger les cartes

			blocs.blocFirstCard.htmlElement.classList.add('activeKeyframes');
			blocs.blocThirdCard.htmlElement.classList.add('activeKeyframes');
			blocs.blocSecondCard.htmlElement.classList.add('activeKeyframes2');
			blocs.blocFourthCard.htmlElement.classList.add('activeKeyframes2');

			// Méthode pour activer la barre transparente

			transparentBar.classList.add('fusee');
		}

		// Méthode pour mettre les cartes en grises

		for (const gray in blocs) {
			if (progress.value < tableau2[blocs[gray].index].elexir + '0') {

				blocs[gray].htmlElement.style.filter = 'grayscale(100%)';

			} else {

				blocs[gray].htmlElement.style.filter = 'none';

			}
		}

	}

	topCarte = "-10%"
	resetTopCarte = "0px"

	// keyCodes : a = 65; z = 90; e = 69, r = 82

	// Fonction pour lever la carte avec l'écouteur d'événement

	function keyElevator () {

		body.addEventListener('keydown', (e) => {

		  	if (e.keyCode === 65 || e.keyCode === 90 || e.keyCode === 69 || e.keyCode === 82) {

		 	 	keyCode(e.keyCode);

		  	} 

		});

	}

	keyElevator();

	// Fonction pour definir la carte lever 

	function keyCode (keyCode) {

		if (keyCode === 65) {
			blocs.blocFirstCard.htmlElement.style.top = topCarte;
			barWhiteFirstCard.style.width = tableau2[0].elexir + '0%';
		} else {
			blocs.blocFirstCard.htmlElement.style.top = resetTopCarte;
			barWhiteFirstCard.style.width = '0%';
		}

		if (keyCode === 90) {
			blocs.blocSecondCard.htmlElement.style.top = topCarte;
			barWhiteSecondCard.style.width = tableau2[1].elexir + '0%';
		} else {
			blocs.blocSecondCard.htmlElement.style.top = resetTopCarte;
			barWhiteSecondCard.style.width = '0%';
		}

		if (keyCode === 69) {
			blocs.blocThirdCard.htmlElement.style.top = topCarte;
			barWhiteThirdCard.style.width = tableau2[2].elexir + '0%';
		} else {
			blocs.blocThirdCard.htmlElement.style.top = resetTopCarte;
			barWhiteThirdCard.style.width = '0%';
		}

		if (keyCode === 82) {
			blocs.blocFourthCard.htmlElement.style.top = topCarte;
			barWhiteFourthCard.style.width = tableau2[3].elexir + '0%';
		} else {
			blocs.blocFourthCard.htmlElement.style.top = resetTopCarte;
			barWhiteFourthCard.style.width = '0%';
		}

		blocs.blocFirstCard.isClicked = keyCode === 65 ? true : false;
		blocs.blocSecondCard.isClicked = keyCode === 90 ? true : false;
		blocs.blocThirdCard.isClicked = keyCode === 69 ? true : false;
		blocs.blocFourthCard.isClicked = keyCode === 82 ? true : false;

	}

	// Fonction du double click

	function doubleClick () {

		nextCard.backNextCard.createImgCard.src = tableau3[0].image
		nextCard.backNextCard.htmlElement.appendChild(nextCard.backNextCard.createImgCard)

		nextCard.backNextCard.createImgCard.classList.add ('imgCardTableau3')

		nextCard.backNextCard.createImgElexir.src = "img/elixir-clash-royale.png"
		nextCard.backNextCard.htmlElement.appendChild(nextCard.backNextCard.createImgElexir)

		nextCard.backNextCard.createImgElexir.classList.add ('imgElexir')


		nextCard.backNextCard.cell.textContent = tableau3[0].elexir
		nextCard.backNextCard.htmlElement.appendChild(nextCard.backNextCard.cell)

		nextCard.backNextCard.cell.classList.add ('elexirText')

		for (const key in blocs ) {
			blocs[key].createImgCard.src = tableau2[blocs[key].index].image
			blocs[key].htmlElement.appendChild(blocs[key].createImgCard)

			blocs[key].createImgCard.classList.add ('imgCardTableau2')

			blocs[key].createImgElexir.src = "img/elixir-clash-royale.png"
			blocs[key].htmlElement.appendChild(blocs[key].createImgElexir)

			blocs[key].createImgElexir.classList.add ('imgElexir')


			blocs[key].cell.textContent = tableau2[blocs[key].index].elexir
			blocs[key].htmlElement.appendChild(blocs[key].cell)

			blocs[key].cell.classList.add ('elexirText')

		}

		// Ecouteur d'événement pour le double click 
		
		for (const key in blocs) {

			body.addEventListener('click', (e) => {

				if (blocs[key].isClicked === true && progress.value > blocs[key].cell.innerText + '0' -1) {

					progress.value -= blocs[key].cell.innerText + '0';
					progressDiv.classList.remove('progress');

					blocs[key].htmlElement.style.top = resetTopCarte;

					let echangeTableau2 = tableau2.splice([blocs[key].index],1)[0]
					let echangeTableau3 = tableau3.shift()

					tableau3.push(echangeTableau2)
					tableau2.splice([blocs[key].index],0, echangeTableau3)

					blocs[key].isClicked = false

					blocs[key].createImgCard.src = tableau2[blocs[key].index].image;
					blocs[key].cell.textContent = tableau2[blocs[key].index].elexir;

					nextCard.backNextCard.createImgCard.src = tableau3[0].image;
					nextCard.backNextCard.cell.textContent = tableau3[0].elexir;

					barWhiteFirstCard.style.width = '0%';
					barWhiteSecondCard.style.width = '0%';
					barWhiteThirdCard.style.width = '0%';
					barWhiteFourthCard.style.width = '0%';

					transparentBar.classList.remove('fusee');

				}
			})
		}

	}

	doubleClick();

}

barre()
















