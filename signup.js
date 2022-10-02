let getform = document.querySelector(".half")
console.log(getform)
getform.addEventListener('submit',getData)

let arrData = JSON.parse(localStorage.getItem("userData"))||[]
let signupData = JSON.parse(localStorage.getItem("userData"))

function getData(e){
    e.preventDefault()
    console.log("hhi")
    let objData = {
        user_firstname:getform.firstName.value,
        user_lastname:getform.lastname.value,
        user_email:getform.SignUpemail.value,
        user_pass:getform.SignUppass.value,
        user_username:getform.username.value,
        user_birthdate:getform.getdate.value,
        user_country:getform.countries.value,
        user_state:getform.states.value,
        user_gender_male:getform.male.value,
        user_gender_female:getform.female.value,
    }
    let isPresent = false
    arrData.forEach(el => {
        if(el.user_email==objData.user_email && el.user_pass == objData.user_pass){
            isPresent = true
        }
    });

    if (isPresent == true) {
        window.alert("please login you are already signed up")
    }else{
        if (objData.user_firstname==""||objData.user_lastname==""||objData.user_email==""||objData.user_pass==""||objData.user_username==""||objData.user_birthdate==""||objData.user_country==""||objData.user_state=="") {
            window.alert("please fill the entire form")
            getform.reset()
        } else {
            arrData.push(objData)
            localStorage.setItem("userData",JSON.stringify(arrData))
            window.alert("Signed up sucessfully")
            getform.reset()
            window.location.href = "index.html"
        }
    }
    
}