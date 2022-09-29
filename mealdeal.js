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