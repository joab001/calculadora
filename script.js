const calculator = document.querySelector("#calculator");
const operation = document.querySelector(".operation");
const result = document.querySelector(".result");

// resolver o problema de não conseguir usar a função
// clear para limpar o painel usano botão


let expresion = "";
clear()

function addNum(num) {
  expresion += num;
  updateDisplay();
}

function addOperator(operator) {
  expresion += operator;
  updateDisplay();
}

function calcresult() {
  const resulte = eval(expresion);

  try {
    result.textContent = resulte;
  } catch (error) {
    console.log("erro");
  }
}

function updateDisplay() {
  operation.textContent = expresion;
}

function clear() {
  result.textContent = 0
  operation.textContent = 0
}

function backSpace() {
  if (expresion.length > 1) {
    expresion = expresion.slice(0,-1);
    operation.textContent = expresion;
  }else{
    clear()
  }
}