const display = document.querySelector("#display");

function press(value) {
  display.value += value;
}

function calculate() {
  try {
    const result = eval(display.value);
    
    if (result === Infinity || result === -Infinity) {
      display.value = "divide-by-zero"; // 0으로 나눈 경우
    } else if (result === undefined || isNaN(result)) {
      display.value = "error"; // 기타 오류 처리
    } else {
      display.value = result;
    }
  } catch {
    display.value = "error"; // 문법 오류
  }
}

function clearDisplay() {
  display.value = "";
}