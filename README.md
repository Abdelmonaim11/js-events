# TD n◦2: Introduction to JavaScript — Events
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">Overview</a>
      <ul>
        <li><a href="#built-with">Technologies Used</a></li>
      </ul>
    </li>
    <li>
      <a href="#about-the-project">About The TP</a>
      <ul>
        <li><a href="#built-with">Exercise 1 </a></li>
        <li><a href="#built-with">Exercise 2 </a></li>
        <li><a href="#built-with">Exercise 3 </a></li>
        <li><a href="#built-with">Exercise 4 </a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Implementation</a>
      <ul>
        <li><a href="#prerequisites">Screenshots</a></li>
      </ul>
    </li>
  </ol>
</details>


## Overview
Objective of the Activity: Introduction to JavaScript and Events

This activity aims to introduce learners to the basics of JavaScript and event handling by manipulating the DOM. Through these progressive exercises, participants will learn to:

- Understand User Interaction – By creating interactive interfaces such as swapping values between two text fields or a simple calculator, learners will see how to capture and process user actions.
- Manipulate the DOM with JavaScript – These exercises require dynamically modifying the content of HTML elements, reinforcing the understanding of DOM manipulation.
- Handle JavaScript Events – Using buttons to trigger actions (swapping text, performing calculations) allows learners to experiment with events like click and learn how to respond using JavaScript functions.
- Apply Mathematical Concepts – The calculator and BMI calculation exercises introduce number manipulation and mathematical operations in JavaScript.
- Use CSS Grid for the Interface – In the advanced calculator exercise, participants will learn how to structure a user interface by combining JavaScript with CSS Grid.
In summary, this activity provides a gradual introduction to JavaScript, focusing on interactivity and event-driven programming while applying practical and real-world concepts.
### Technologies Used
 - <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="30" height="30"/>   **JavaScript**
 - <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" width="30" height="30"/>   **Visual Studio Code**
 - <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" width="30" height="30"/> &nbsp;&nbsp;**Git**
 - <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="30" height="30"/> &nbsp;&nbsp;**GitHub**
## About The Project
### Exercise 1:
This is a classic programming exercise designed to introduce basic DOM manipulation and event handling in JavaScript. The goal is to create a simple form with two text fields and a button. When the button is clicked, the content of the two text fields should be swapped.
```html
<button onclick="permuter()">Permuter</button>
<script src="script.js"></script>
```
```javascript
function permuter() {
  var input1 = document.getElementById("input");
  var input2 = document.getElementById("input2");
  var temp = input1.value;
  input1.value = input2.value;
  input2.value = temp;
}
```

### Exercise 2:
This exercise focuses on basic arithmetic operations using JavaScript. The goal is to create a simple calculator that can perform addition, subtraction, multiplication, and division.
```html
  <div class="calculator">
      <input type="text" id="num1" placeholder="Enter first number" />
      <input type="text" id="num2" placeholder="Enter second number" />
      <div class="btns">
        <button onclick="add()">+</button>
        <button onclick="subtract()">-</button>
        <button onclick="multiply()">*</button>
        <button onclick="divide()">/</button>
      </div>
      <input type="text" id="result" />
    </div>
```
```javascript
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("result");
function add() {
  result.value = (parseInt(num1.value) + parseInt(num2.value)).toString();
}
function subtract() {
  result.value = (parseInt(num1.value) - parseInt(num2.value)).toString();
}
function multiply() {
  result.value = (parseInt(num1.value) * parseInt(num2.value)).toString();
}
function divide() {
  result.value = (parseInt(num1.value) / parseInt(num2.value)).toString();
}

```
### Exercise 3:
This exercise focuses on building a Body Mass Index (BMI) calculator using JavaScript. The goal is to create a form where users can enter their weight (kg) and height (m), and the program will calculate their BMI using the following formula:
![image](https://github.com/user-attachments/assets/91686079-35af-4659-92cf-4491266fdbdb)
```html
 <div class="mainDiv">
      <h2>Calculateur d'IMC</h2>
      <label for="poids">Poids (kg):</label>
      <input type="number" id="poids" placeholder="Entrez votre poids" />

      <label for="taille">Taille (m):</label>
      <input type="number" id="taille" placeholder="Entrez votre taille" />

      <button onclick="calculerIMC()">Calculer</button>

      <p id="result"></p>
    </div>
```
```javascript
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


```
### Exercise 4:
This exercise involves creating an advanced scientific calculator using pure JavaScript methods. The goal is to implement a full range of mathematical calculations such as trigonometric functions, logarithms, and other advanced operations. The interface will be structured using the CSS Grid layout.
