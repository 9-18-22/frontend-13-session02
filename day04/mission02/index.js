let currentOperator = "+";  // 기본값

function calculate(operator) {
  const num1El = document.getElementById("#num1");
  const num2El = document.getElementById("#num2");
  const resultEl = document.getElementById("#result");

  const n1 = Number(num1El.value);
  const n2 = Number(num2El.value);

  if (isNaN(n1) || isNaN(n2) || num1El.value === "" || num2El.value === "") {
    resultEl.textContent = "숫자를 입력해주세요.";
    return;
  }

  let result;
  if (operator === "+") {
    result = n1 + n2;
  } else if (operator === "-") {
    result = n1 - n2;
  } else if (operator === "*") {
    result = n1 * n2;
  } else {
    if (n2 === 0) {
      resultEl.textContent = "divide-by-zero";
      return;
    }
    result = n1 / n2;
  }

  resultEl.textContent = `결과: ${result}`;
  currentOperator = operator;  // 마지막 연산자 저장
}

// Enter 누르면 마지막 사용한 연산자로 계산
document.getElementById("num2").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calculate(currentOperator);
  }
});