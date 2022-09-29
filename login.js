let logindata = JSON.parse(localStorage.getItem("userData"))
let loginStore = JSON.parse(localStorage.getItem("loginData"))||[]
let get_login = document.querySelector("#get-login")
get_login.addEventListener("submit",checklogin)
function checklogin(e){
    e.preventDefault()
    let get_email = get_login.email.value
    let get_pass  = get_login.pass.value
    let isPresent  = false
    logindata.forEach(el => {
        if (el.user_email==get_email && el.user_pass==get_pass) {
            isPresent = true
        }
    });

    if(isPresent==true){
        window.alert("login Sucessful")
        get_login.email.value = ""
        get_login.pass.value = ""
        let logobj = {
            user_email:get_email,
            user_pass:get_pass
        }
        loginStore.push(logobj)
        localStorage.setItem("loginData",JSON.stringify(loginStore))
    }else{
        window.alert("please sign up")
        get_login.email.value = ""
        get_login.pass.value = ""
    }
}