var a , b , r;
a = parseInt(prompt('Entrez une valeur'));
b = parseInt(prompt('Entrez une autre'));

if(a == 0 && b == 0)
    alert('Erreur');
else{
    if(a == 0 && b != 0)
    alert('Resultat = '+b);
        else{
            if( a != 0 && b == 0)
            alert('Resusltat = '+a);
            else{
                if(a >= b){
                    r = a%b;
                    while(r != 0){
                        a = b;
                        b = r;
                        r = a%b;
                    }
                    alert('Resultat = '+b);
                }else{
                    r = b%a;
                    while(r != 0){
                        b = a;
                        a = r;
                        r = b%a;
                    }
                    alert('Resultat = '+a);
            }
        }
    }
}
