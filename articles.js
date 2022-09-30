let objData  = [
    {
        img:"https://www.kindmeal.my/photos/article/20/20133-l.jpg",
        h2:"Hooded Seals' Impressive Mating Trick | Frozen Planet Ii",
        comp:"by KindMeal.my",
        desc:"Hooded seals' impressive mating trick!",
        butt:"view Video",
        date: "01 October 2022"
    },
    {
        img:"https://www.kindmeal.my/photos/article/20/20130-l.jpg",
        h2:"Hearty Chickpea Curry",
        comp:"by KindMeal.my",
        desc:"A hearty Chickpea Curry full of goodness!",
        butt:"view Video",
        date: "30 sep 2022"
    },
    {
        img:"https://www.kindmeal.my/photos/article/20/20129-l.jpg",
        h2:"Indulge In Bings Banting''s Decadent Desserts Of Bingsu, Cube Toasts, Waffles And..",
        comp:"by KindMeal.my",
        desc:"Indulge in BINGS Banting's decadent desserts of Bingsu, cube toasts, waffles and homemade pastries. Complement them with quality Arabica & Robusta coffees and organic blended Harney & Sons teas. Enjoy 10% off:",
        butt:"view Articles",
        date: "29 sep 2022"
    },
    {
        img:"https://www.kindmeal.my/photos/article/20/20126-l.jpg",
        h2:"Ethel The Tortoise''s Bedtime Routine 🐢",
        comp:"by KindMeal.my",
        desc:"Ethel the tortoise has the most adorable bedtime routine 🐢",
        butt:"View Video",
        date: "29 sep 2022"
    },
    {
        img:"https://www.kindmeal.my/photos/article/20/20132-l.jpg",
        h2:"Last Month We Assisted Over 150 Maine Citizens In Submitting A Petition Requesti..",
        comp:"by Compassion Over Killing",
        desc:"Progress! 🙌 RIU Hotels & Resorts has committed to banning cages in its global egg supply chain. This policy will be implemented in its 100 hotels located in 20 countries and will improve the lives of more than ✨375,000 hens✨ each year. This is a step forward in providing the bare minimum to these a..",
        butt:"View Article",
        date: "30 sep 2022"
    },
    {
        img:"https://www.kindmeal.my/photos/article/20/20131-l.jpg",
        h2:"Progress Riu Hotels Resorts Has Committed To Banning Cages In Its Global Egg Sup..",
        comp:"by Animal Equality",
        desc:"Last month we assisted over 150 Maine citizens in submitting a petition requesting that the Maine Department of Agriculture, Conservation and Forestry, Animal Welfare Program (DACF-AWP) put in place basic guardrails to regulate how fish are treated. Maine's DACF-AWP has responded, indicating that it..",
        butt:"View Article",
        date: "30 sep 2022"
    },
    {
        img:"https://www.kindmeal.my/photos/article/20/20128-l.jpg",
        h2:"Help Us Call On Compass To Stand By Its Pledge Today, At 10am Central Standard1..",
        comp:"by Animal Equality",
        desc:"Help us call on Compass to stand by its pledge! 📢 Today, at 10am Central Standard/11am Eastern, USA, we will be having a tweetstorm to demand Compass keep its promise to mother pigs. 10 years ago, Compass Group promised to ban one of the worst abuses in animal agriculture - crates for mother pigs. ..",
        butt:"View Article",
        date: "29 sep 2022"
    },
    {
        img:"https://www.kindmeal.my/photos/article/20/20127-l.jpg",
        h2:"We''re Hiring In The United States. Animal Equality Is Currently Looking To Fill ..",
        comp:"by Animal Equality",
        desc:"We're hiring in the United States! 📣✨ Animal Equality is currently looking to fill remote positions in the U.S.: Full Stack Developer, Undercover Investigator, Associate Legal Advocacy Counsel & Copywriter. Join our determined, compassionate & effective international team! 💙 Help us create a bette..",
        butt:"View Article",
        date: "29 sep 2022"
    },
    {
        img:"https://www.kindmeal.my/photos/article/20/20125-l.jpg",
        h2:"So Excited For Our Senior Director Of Legal Advocacy, Piper Hoffman, Will Be Spe..",
        comp:"by Compassion Over Killing",
        desc:"So excited for our Senior Director of Legal Advocacy, Piper Hoffman, will be speaking at the The Animal & Vegan Advocacy Summit next month! Register here to attend and hear from over 80 expert speakers:",
        butt:"View Article",
        date: "28 sep 2022"
    },
    {
        img:"https://www.kindmeal.my/photos/article/20/20124-l.jpg",
        h2:"Vegan Add-ins For Your Dog’s Food - Animal Outlook",
        comp:"by Compassion Over Killing",
        desc:"With the rise in popularity of raw pet diets, it can be difficult to know what to feed as a pet guardian. Dogs especially have complicated nutritional needs that are met through foods in multiple different sustenance groups. If you’re looking for vegan options to add to your dog’s food rotation, we ..",
        butt:"View Article",
        date: "28 sep 2022"
    }
]
pushData(objData)

function pushData(Data){
    Data.forEach(el=>{
        let t_container = document.createElement("div")
        t_container.setAttribute("class","container")
        let t_div1 = document.createElement("div")
        let t_img = document.createElement("img")
        t_img.src = el.img
        t_div1.append(t_img)
        let t_div2 = document.createElement("div")
        let t_heading = document.createElement("div")
        t_heading.setAttribute("class","heading")
        let t_heading_h2 = document.createElement("h2")
        t_heading_h2.innerText = el.h2
        let t_heading_p = document.createElement("p")
        t_heading_p.innerText = el.comp
        t_heading.append(t_heading_h2,t_heading_p)
        let desc = document.createElement("p")
        desc.innerText = el.desc
        let t_button = document.createElement("div")
        let t_button_button = document.createElement("button")
        t_button_button.innerText = el.butt
        let t_button_p = document.createElement("p")
        t_button_p.innerText = el.date
        t_button.append(t_button_button,t_button_p)
        t_div2.append(t_heading,desc,t_button)
        t_container.append(t_div1,t_div2)
        document.querySelector("body").append(t_container)
    })
}