function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  let expression = document.getElementById("display").value;

  // Remplacement des constantes mathématiques et des fonctions
  expression = expression.replace(/π/g, "Math.PI");
  expression = expression.replace(/e/g, "Math.E");
  expression = expression.replace(/√\(/g, "Math.sqrt(");
  expression = expression.replace(/sin\(/g, "Math.sin(");
  expression = expression.replace(/cos\(/g, "Math.cos(");
  expression = expression.replace(/tan\(/g, "Math.tan(");
  expression = expression.replace(/log\(/g, "Math.log10(");
  expression = expression.replace(/ln\(/g, "Math.log(");

  try {
    let result = eval(expression);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Erreur";
  }
}
