/***************************************toggle icon****************************************/
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector(".navbar")

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark') 
    navbar.classList.toggle('active')
}

/************************scroll section**************/
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active')
            })
        }
    })

/*********************************stick navbar**************************************************/
let header = document.querySelector('header')
header.classList.toggle('sticky', window.scrollY > 100)

/**********************************remove toggle icon ad navbar***********************************/
menuIcon.classList.remove('fa-xmark')
navbar.classList.remove('active') 
}

/********************scorll reveal***************************************************************/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
})

ScrollReveal().reveal('.home-content, heading', {origin: 'top'})
ScrollReveal().reveal('.home-img, .Competences-container, .portfolio-box, .contact form', {origin: 'bottom'})
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'})
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'})


/*******************************TYPE JS***************************************************************/

const typed = new Typed('.multiple-text',{
    strings: ['Developpeur', 'Programmeur en C/C++', 'Matheux'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
     
})

//Envoyer message
function afficherEmail(nom, numero, email, sujet, message) {
    let mailto = `mailto:${email}?subject=${sujet}&body=Nom:${nom} Numero:${numero}   Message:${message}`
    location.href = mailto
}

let form = document.querySelector("form")
form.addEventListener("submit", (event) =>{
    //empêchez le comportement par défaut de se produire 
    event.preventDefault()
    console.log("pas de rechargement")

        let baliseNom = document.getElementById("nom")
        let nom = baliseNom.value

        let baliseEmail = document.getElementById("email")
        let email = baliseEmail.value

        let baliseNumero = document.getElementById("numero")
        let numero = baliseNumero.value

        let baliseSujet = document.getElementById("sujet")
        let sujet = baliseSujet.value

        let baliseMessage = document.getElementById("message")
        let message = baliseMessage.value


        afficherEmail(nom, numero, email, sujet, message)

    })
 


