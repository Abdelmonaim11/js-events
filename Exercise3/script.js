function calculerIMC() {
  let poids = parseFloat(document.getElementById("poids").value);
  let taille = parseFloat(document.getElementById("taille").value);

  if (isNaN(poids) || isNaN(taille) || poids <= 0 || taille <= 0) {
    document.getElementById("result").innerText =
      "Veuillez entrer des valeurs valides.";
    return;
  }

  let imc = poids / (taille * taille);
  let interpretation = "";

  if (imc < 18.5) {
    interpretation = "Insuffisance pondérale (maigreur)";
  } else if (imc < 25) {
    interpretation = "Corpulence normale";
  } else if (imc < 30) {
    interpretation = "Surpoids";
  } else if (imc < 35) {
    interpretation = "Obésité modérée";
  } else if (imc < 40) {
    interpretation = "Obésité sévère";
  } else {
    interpretation = "Obésité morbide ou massive";
  }

  document.getElementById("result").innerText = `Votre IMC est de ${imc.toFixed(
    2
  )}. ${interpretation}.`;
}
