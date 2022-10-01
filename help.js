let merchant  = document.querySelector("#merchant-help")
let merchant_modal = document.querySelector(".merchant")
let close_merch = document.querySelector("#close-merch")
merchant.addEventListener("click",showMerc)
close_merch.addEventListener("click",closeMerc)

function showMerc(){
    merchant_modal.classList.add("able")
    merchant_modal.classList.remove("disable")
}
function closeMerc(){
    merchant_modal.classList.remove("able")
    merchant_modal.classList.add("disable")
}

let help_page = document.querySelector("#help")
let advertising_page = document.querySelector("#advertising")
let about_page = document.querySelector("#about")
let superhero_page = document.querySelector("#superhero")
let contact_page = document.querySelector("#contact")

help_page.addEventListener("click",helpPage)

function helpPage(){
    window.location.href = "help.html"
}
advertising_page.addEventListener("click",advertisingPage)

function advertisingPage(){
    window.location.href = "advertising.html"
}
about_page.addEventListener("click",aboutPage)

function aboutPage(){
    window.location.href = "about.html"
}
superhero_page.addEventListener("click",superheroPage)

function superheroPage(){
    window.location.href = "superhero.html"
}
contact_page.addEventListener("click",contactPage)

function contactPage(){
    window.location.href = "contact.html"
}