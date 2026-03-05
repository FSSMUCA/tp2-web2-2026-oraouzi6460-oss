let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;
let valeurDefauts = "valeur par défaut";

console.log(`------PARTIE A----------`);
console.log(`nom ?? "valeur par défaut" ->`  + (nom ?? valeurDefauts));
console.log(`age ?? "valeur par défaut" -> ` + (age ?? valeurDefauts));
console.log(`ville ?? "valeur par défaut" -> ` + (ville ?? valeurDefauts));
console.log(`score ?? "valeur par défaut" -> ` + (score ?? valeurDefauts));
console.log(`actif ?? "valeur par défaut" -> ` + (actif ?? valeurDefauts));

console.log(`------PARTIE B----------`);
console.log(`nom || "valeur par défaut" ->`  + (nom || valeurDefauts));
console.log(`age || "valeur par défaut" -> ` + (age || valeurDefauts));
console.log(`ville || "valeur par défaut" -> ` + (ville || valeurDefauts));
console.log(`score || "valeur par défaut" -> ` + (score || valeurDefauts));
console.log(`actif || "valeur par défaut" -> ` + (actif || valeurDefauts));

console.log(`------PARTIE C---------`);
console.log(`nom : ?? et || ->`  + ((nom ?? valeurDefauts) == (nom || valeurDefauts)?"même résultat":"résultats différents"));
console.log(`age : ?? et || ->`  + ((age ?? valeurDefauts) == (age || valeurDefauts)?"même résultat":"résultats différents"));
console.log(`ville : ?? et || ->`  + ((ville ?? valeurDefauts) == (ville || valeurDefauts)?"même résultat":"résultats différents"));
console.log(`score : ?? et || ->`  + ((score ?? valeurDefauts) == (score || valeurDefauts)?"même résultat":"résultats différents"));
console.log(`actif : ?? et || ->`  + ((actif ?? valeurDefauts) == (actif || valeurDefauts)?"même résultat":"résultats différents"));