let button = document.getElementsByClassName("button-size");
let resultt = document.getElementById("result");

let operand1 = 0;
let operand2 = null;
let operator = null;

for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    let t = this.getAttribute("numvalue");

    console.log(t);
    if (t == "+" || t == "-" || t == "*" || t == "/" || t === "%") {
      operator = t;
      operand1 = parseFloat(resultt.value);
      resultt.value = "";
      console.log(operand1);
    } else if (t == "=") {
      operand2 = resultt.value;
      console.log(operand2);
      resultt.value = operand2;
      operand2 = parseFloat(resultt.value);
      if (operator == "+") {
        resultt.value = operand1 + operand2;
      } else if (operator == "-") {
        resultt.value = operand1 - operand2;
      } else if (operator == "*") {
        resultt.value = operand1 * operand2;
      } else if (operator == "/") {
        resultt.value = operand1 / operand2;
      } else if (operator == "%") {
        resultt.value = operand1 % operand2;
      }
    } else if (t == "") {
      resultt.value = "";
    } else if (t == "del") {
      resultt.value = resultt.value.slice(0, -1);
    } else {
      resultt.value += t;
    }
  });
}
