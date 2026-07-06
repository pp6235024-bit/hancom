const a = document.querySelector("#a")
const b = document.queryselector("#b")
const op = document. queryselector("#op")
const out = document,querySelector(#"out")

document.querySelector ,addeventlistener("click", () => {
    const x = number(a.value);
    const y = Number(b.value);
    let result;
    if (op.value ==="+"){result = X + y; }
    else if (op.value === "-") {result = x - y;}
    else if op. === "*") { result = x * y; }
  else { result = x / y; }
  // 템플릿 리터럴로 "3 + 5 = 8" 같은 문장 조립
  out.textContent = `${x} ${op.value} ${y} = ${result}`;
});