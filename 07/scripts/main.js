const multiply = (num1, num2) =>num1 *num2;
const a = document. querySelector("#a")
const b =document. querySelector("#b")
const out =document.querySelector("#out")
document,queryselector("#calc").addEventListener("click", () => {
    out.textContnet ='&{a.value} x ${b.value} =
    ${multiply(Mumber(a.value), Number(b.value))}';});