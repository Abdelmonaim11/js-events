function calculerIMC() {
  let poids = parseFloat(document.getElementById("poids").value);
  let taille = parseFloat(document.getElementById("taille").value);

  if (isNaN(poids) || isNaN(taille) || poids <= 0 || taille <= 0) {
    document.getElementById("result").innerText =
      "Veuillez entrer des valeurs valides.";
    return;
  }

  let imc = poids / (taille * taille);
  let message = "";

  if (imc < 18.5) {
    message = "Insuffisance pondérale (maigreur)";
  } else if (imc < 25) {
    message = "Corpulence normale";
  } else if (imc < 30) {
    message = "Surpoids";
  } else if (imc < 35) {
    message = "Obésité modérée";
  } else if (imc < 40) {
    message = "Obésité sévère";
  } else {
    message = "Obésité morbide ou massive";
  }

  document.getElementById("result").innerText = `Votre IMC est de ${imc.toFixed(
    2
  )}. ${message}.`;
}
