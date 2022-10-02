let img1 = document.querySelector("#img1")
let img2 = document.querySelector("#img2")
let slide_disc = document.querySelector(".slider>#disc")
let slide_text = document.querySelector(".slider>#text")
let small = [
	"https://www.kindmeal.my/photos/shop/5/504-3481-m.jpg",
	"https://www.kindmeal.my/photos/shop/5/549-4094-m.jpg",
	"https://www.kindmeal.my/photos/shop/5/593-4434-m.jpg",
	"https://www.kindmeal.my/photos/shop/2/277-1549-m.jpg",
	"https://www.kindmeal.my/photos/shop/5/592-4483-m.jpg",
	"https://www.kindmeal.my/photos/shop/6/603-4533-m.jpg",
];
let big = [
	"https://www.kindmeal.my/photos/deal/7/700-4802-m.jpg",
	"https://www.kindmeal.my/photos/deal/7/701-4904-m.jpg",
	"https://www.kindmeal.my/photos/deal/7/708-4923-m.jpg",
	"https://www.kindmeal.my/photos/deal/6/684-4446-m.jpg",
	"https://www.kindmeal.my/photos/deal/6/644-3810-m.jpg",
	"https://www.kindmeal.my/photos/deal/6/627-3532-m.jpg",
];

let text = [
	"Tasty Midas Touch,15% Off",
	"Nature Dining,10% Off-Camp Forest",
	"Tasty, Joyful Moments, 10% Off -Moment of Joy",
	"Mangga Natural Lifestyle,20% Off -Mangga Vegetarial Cafe",
	"Lei Cha & Organic Meals, 20% Off -- Green Talk Healthy Organic & Cafe",
	"wholesome Western Experience,20% Off -- Piccolo Cafe",
];
let disc = [
	"15%",
	"10%",
	"20%",
	"10%",
	"15%",
	"20%",
];
console.log(disc[0])

let i = 0

function slide(){
    if(i==small.length){
        i=0
    }
        img1.src = big[i]
        img2.src = small[i]
        slide_disc.innerText = disc[i]
        slide_text.innerText = text[i]
        i++
}

setInterval(slide,2000)