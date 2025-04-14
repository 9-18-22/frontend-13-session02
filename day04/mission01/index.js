function add() {
    const num1 = document.getElementById("#num1").value;
    const num2 = document.getElementById("#num2").value;
    const result = document.getElementById("#result");
  
    const n1 = Number(num1);
    const n2 = Number(num2);
  
    if (isNaN(n1) || isNaN(n2) || num1 === "" || num2 === "") {
      result.textContent = "숫자를 입력해주세요.";
      return;
    }
    result.textContent = `결과: ${n1 + n2}`;
}

document.getElementById("num2").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      add();
    }
});