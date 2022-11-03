const form = document.querySelector("#form");
const n = document.querySelector('#n');
const em = document.querySelector('#em');
const p = document.querySelector('#p');
const p2 = document.querySelector('#p2');


form.addEventListener('submit',e=>{
    e.preventDefault();

    verife();
})


function verife() {
    const nValue = n.value.trim();
    const Value = em.value.trim();
    const pValue = p.value.trim();
    const p2Value = p2.value.trim();

    if (nValue === "") {
        let message ="Username ne peut pas être vide";
        faux(n,message);
    }else if(!nValue.match(/^[a-zA-Z]/)){
        let message ="Username doit commencer par une lettre";
        faux(n,message)
    }else{
        let nNum = nValue.length;
        if (nNum < 3) {
            let message ="Username doit avoir au moins 3 caractères";
            faux(n,message)
        } else {
            vrai(n);
        }
    }

 
    if (Value === "") {
        let message = "Email ne peut pas être vide";
        faux(em,message);
    }else if(!e_verife(Value)){
        let message = "Email non valide";
        faux(em,message);
    }else{
        vrai(em)
    }
    
    let pNum = pValue.length;
    if (pValue ==="") {
        let message ="Le passeword ne peut pas être vide";
        faux(p,message)
    }else if(pNum<8){
        let message = "Le mot de passe est trop faible (au moins 8  caractères)";
        faux(p,message)
    }else{
        vrai(p);
    }
    // pwd confirm
    if (p2Value ==="") {
        let message ="Le passeword confirm ne peut pas être vide";
        faux(p2,message)
    }else if( pValue !== p2Value){
        let message ="Les mot de passes ne correspondent pas";
        faux(p2,message)
    }else{
        vrai(p2)
    }
}

function faux(elem,message) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message

    formControl.className = "controle error";
}

function vrai(elem) {
    const formControl = elem.parentElement;
    formControl.className ='controle success'
}

function e_verife(email) {
   
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}