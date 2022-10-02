// building auto slider

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


let nav_bar = document.querySelector(".fa-bars")
let show_nav=document.querySelector(".nav-2")
let show_ul = document.querySelector(".nav-2>ul")
console.log(show_ul.innerHTML)
nav_bar.addEventListener("click",showHam)
function showHam(){
	show_ul.innerHTML = ""
	show_ul.insertAdjacentHTML("beforeend",`<li><a href="index.html">Home</a></li>
	<li><a href="mealdeal.html">Meal Deals</a></li>
	<li><a href="kindmoment.html">Kind Moments</a></li>
	<li><a href="hotpicks.html">Hot picks</a></li>
	<li><a href="recipes.html">Recipes</a></li>
	<li><a href="directory.html">Directory</a></li>
	<li><a href="articles.html">Articles</a></li>
	<li><a href="help.html">Help</a></li><li><a href="#" id="click-login">Login</a></li>
	<li><a href="#" id="click-signup">signup</a></li>`)
	show_nav.style.width = "50%"
	let log = document.querySelector("#click-login")
	let sign = document.querySelector("#click-signup")
	log.addEventListener("click",function(){
		showpage()
	})
	sign.addEventListener("click",function(){
		showSignup()
	})
}
let close_nav = document.querySelector("#close-nav")
close_nav.addEventListener("click",closeNav)

function closeNav(){
	show_nav.style.width = "0%"
}
