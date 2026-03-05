let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

console.log(`===== RÉCAPITULATIF =====`);
console.log(`Produit : ${nomProduit}`);
console.log(`Quantité : ${quantite}`);
console.log(`Prix unit: ${prix} MAD`);
 sous_total = (prix * quantite);
console.log(`Sous-total : ${sous_total} MAD`);
 if (codePromo!=null && estMembre==true) {
    reduction= (sous_total * reductionPourcentage / 100);
    console.log(`réduction  : ` + reduction + ` MAD`);
 }else{
     reduction=0;
 }
total_final = sous_total - reduction;
console.log(`Total à payer : ${total_final} MAD`);
 if (total_final <= soldeCompte) {
        console.log(`Statut : paiment accepté`);
        console.log(`solde:` + (soldeCompte - total_final));
 }else{
        console.log(`Solde insuffisant`);
 }
 console.log(`=========================`);

