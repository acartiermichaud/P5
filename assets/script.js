const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



// Functions *****************************************

// Bullet points creation
function dotsCreation (slideList) {

	const divDots = document.querySelector(".dots")

	for (let i = 0; i < slideList.length; i++) {
		let selectedState = false
		const dotElement = document.createElement("div")
		dotElement.classList.add("dot")
		dotElement.setAttribute("id", "dot_"+i)
		
		if (i===0) {
			selectedState = true
			dotElement.classList.add("dot_selected")
		}

		dotsList.push(selectedState)
		divDots.appendChild(dotElement)
	}
}

// Calculation of new index
function newIndexCalculation (direction) {

	for (let i = 0; i < dotsList.length; i++) {
		
		if (dotsList[i]) {
			dotsList[i] = false

			if (direction==="right") {
				dotsList[i+1] = true
				return [i, i+1]
			}
			else {
				dotsList[i-1] = true
				return [i, i-1]
			}
		}
	}
}

// Dots update
function dotsUpdate (oldPos, newPos) {
	let oldDot = document.querySelector(".dot_selected")
	oldDot.classList.remove("dot_selected")
	
	let newDot = document.getElementById("dot_"+newPos)
	newDot.classList.add("dot_selected")
}

// Image update
function imageUpdate (newPos) {
	let imageContener = document.querySelector(".banner-img")
	imageContener.src = `/home/amandine/Documents/OpenClassRooms/FormationIntegrateurWeb/Projet_5/P5_GitHub/P5/assets/images/slideshow/${slides[newPos].image}`
	let imageText = document.querySelector(".banner-txt")
	imageText.innerHTML = `<p>${slides[newPos].tagLine}</p>`
}



// Main *****************************************
let dotsList = []
dotsCreation(slides)

// EventListener on arrow left
const arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener ("click", () => {
	positions = newIndexCalculation("left")
	oldPos = positions[0]
	newPos = positions[1]
	dotsUpdate (oldPos, newPos)
	imageUpdate (newPos)
})

// EventListener on arrow right
const arrowRight = document.querySelector(".arrow_right")
arrowRight.addEventListener ("click", () => {
	positions = newIndexCalculation("right")
	oldPos = positions[0]
	newPos = positions[1]
	dotsUpdate (oldPos, newPos)
	imageUpdate (newPos)
})

