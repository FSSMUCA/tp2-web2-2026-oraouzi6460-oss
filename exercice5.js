nombres=[0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

for (let i = 0; i < nombres.length; i++) {
  let v = nombres[i];
  let message = "";

  if (Number.isNaN(v)) {
    message = "INVALIDE";
  }
  else if (v === Infinity || v === -Infinity) {
    message = "INFINI";
  }
  else if (v === 0 && 1 / v === -Infinity) {
    message = "ZERO NEGATIF";
  }
  else if (v % 1 === 0) {   
      if (v > Number.MAX_SAFE_INTEGER || v < -Number.MAX_SAFE_INTEGER) {
        message = "ENTIER HORS LIMITES";
      } else {
        message = "ENTIER SUR";
      }
    }
  else {
    message = "DECIMAL";
  }

  console.log(v + " -> " + message);
}