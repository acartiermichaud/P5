// Global variables *****************************************

// Array of slides details
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


// Carrousel position
let position = 0



// Functions ***********************************************

// Bullet points creation
function dotsCreation () {

	const dotsContener = document.querySelector(".dots")

	for (let i = 0; i < slides.length; i++) {
		const dotElement = document.createElement("div")
		dotElement.classList.add("dot")
		dotElement.setAttribute("id", "dot_"+i)
		
		if (i===0) {
			dotElement.classList.add("dot_selected")
		}

		dotsContener.appendChild(dotElement)
	}
}


// Calculation of new index
function newPositionCalculation (direction) {

	if (direction==="right") {
		if (position === slides.length-1) {
			position = 0
		}
		else {
			position ++
		}
	}
	else {
		if (position === 0) {
			position = slides.length-1
		}
		else {
			position --
		}
	}
}


// Dots update
function dotsUpdate () {
	let oldDot = document.querySelector(".dot_selected")
	oldDot.classList.remove("dot_selected")
	
	let newDot = document.getElementById("dot_"+position)
	newDot.classList.add("dot_selected")
}


// Image update
function imageUpdate () {
	let imageContener = document.querySelector(".banner-img")
	imageContener.src = `./assets/images/slideshow/${slides[position].image}`

	let imageText = document.querySelector(".banner-txt")
	imageText.innerHTML = `<p>${slides[position].tagLine}</p>`
}



// Main ****************************************************

dotsCreation()


// EventListener on left arrow
const arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener ("click", () => {
	newPositionCalculation("left")
	dotsUpdate ()
	imageUpdate ()
})


// EventListener on right arrow
const arrowRight = document.querySelector(".arrow_right")
arrowRight.addEventListener ("click", () => {
	newPositionCalculation("right")
	dotsUpdate ()
	imageUpdate ()
})