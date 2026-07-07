let fruits = ["사과","바나나"];
const fruits = document.querySelector("#fruit");
const out = document.querySelector("#'out");
const info = document.querySelector("#info");
const render= () =>{
    out.textContcnt = fruits.join(", ");
    info.textContent = '개수(length): ${fruits.length}';
};
render();
document.querrySelector("#add").addEventListener("click", () => {})
if (!fruit.value) { return; } 
fruits.push(fruit.value); 
 fruit.value = "";
  render();
});
