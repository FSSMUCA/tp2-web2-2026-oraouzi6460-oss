let nom = "   Fatima  " ;
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log("===== RAPPORT UTILISATEUR =====");
 let nomModiffie=nom.trim();
 if(nomModiffie==null){
    console.log("nom : inconnu");
 }else{
    console.log(`nom :  "${nomModiffie}" (corrigé : espaces supprimés)`);
 }
 
 ageModifier=Number(age);
 if(ageModifier==NaN || ageModifier<=0){
    console.log(" age  : valeur invalide");
 }else{
    console.log(`age  : ${age} (valide)`);
 }

emailAT=email.indexOf("@");
emailPoint=email.indexOf(".");
if(emailAT !== -1 && emailPoint > emailAT){
    console.log(`email : ${email} (valide)`);
}else{
   console.log(`email : ${email} (invalide)`);
}

 
 scoreJeuModiffie=parseInt(scoreJeu);
 if(scoreJeuModiffie==NaN){
    console.log(`scoreJeu : 0 pts `)
 }else{
    console.log(`scoreJeu : ${scoreJeuModiffie} pts `);
 }


 if(estAdmin === "true" ){
    console.log(`estAdmin : ${estAdmin}`);
 }else{
    console.log(`estAdmin : ${estAdmin} `);
 }
 
 condition=derniereConnexion??"jamais connecte";
    console.log(`derniereConnexion : ${condition}` );


if(Number(nombreConnexions)==0){
    console.log(`nombreConnexions : "Aucune connexion" `);
}else{
    console.log(`nombreConnexions : ${nombreConnexions} `);
}


