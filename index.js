// building auto slider
let img1 = document.querySelector(".slider>#images>#img1")
let img2 = document.querySelector(".slider>#images>#img2")
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

// for login modal
let login_email = document.querySelector("#email")
let login_modal = document.querySelector("#login-modal")
let close_login = document.querySelector("#close")
login_email.addEventListener("click",showpage)
function showpage(){
	login_modal.classList.add("active")
	login_modal.classList.remove("log-visible")
	console.log("hi")
}
close_login.addEventListener("click",closePage)
function closePage(){
	login_modal.classList.remove("active")
	login_modal.classList.add("log-visible")
}

// for signup modal

let signup = document.querySelector("#signup")
let signup_modal = document.querySelector("#signup-modal")
let close_sign = document.querySelector("#signclose")
signup.addEventListener("click",showSignup)
close_sign.addEventListener("click",closeSignup)
function showSignup(){
	signup_modal.classList.add("active")
	signup_modal.classList.remove("log-visible")
}
function closeSignup(){
	signup_modal.classList.remove("active")
	signup_modal.classList.add("log-visible")
}

let take_signup = document.querySelector("#signup-html")
take_signup.addEventListener("click",getSignup)
function getSignup(){
	window.location.href = "signup.html"
}