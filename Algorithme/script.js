let nombre1 = document.getElementById("nombre1")
let nombre2 = document.getElementById("nombre2")
let nombre3 = document.getElementById("nombre3")
//Afficher le resultat
function afficheResultat(){
    let confirmer = document.querySelector("button")
    confirmer.addEventListener("click", () => {
        nombre3.innerText = calculpgcd(nombre1, nombre2)
    
    })
}

//Calcul
function calculpgcd(a, b){
    a = nombre1.value
    b = nombre2.value
    let r
    let resultat = nombre3.value

if(a == 0 && b == 0)
    resultat = "Erreur"
else{
    if(a == 0 && b != 0)
        resultat = b
        else{
            if( a != 0 && b == 0)
                resultat = a
            else{
                if(a >= b){
                    r = a%b
                    while(r != 0){
                        a = b
                        b = r
                        r = a%b
                    }
                    resultat = b
                }else{
                    r = b%a
                    while(r != 0){
                        b = a
                        a = r
                        r = b%a
                    }
                    resultat = a
            }
        }
    }
}
return resultat
}


afficheResultat()
