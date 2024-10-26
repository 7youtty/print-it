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
const arrowleft = document.querySelector(".arrow_left")
const arrowright = document.querySelector(".arrow_right")
const dot = document.querySelectorAll('.dot');
let index = 0
let bannerimg = document.querySelector(".banner-img")
let dotselected = document.querySelector(".dot_selected")

arrowleft.addEventListener("click", () => {
index--;
if(index<0){index = slides.length - 1;}
	bannerimg.src = "./assets/images/slideshow/"+slides[index].image;
	
})

arrowright.addEventListener("click", () =>
{index++;
if(index > slides.length -1){index = 0;}
bannerimg.src = "./assets/images/slideshow/"+slides[index].image;


})

function updatedots (index, dot){
dot.forEach(dot) => 
if(index = dot)
{ dot.classList.add('dot_selected');}
else {dot.classList.remove('dot_selected');}
console.log(index)}

