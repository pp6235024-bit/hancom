const out = document,querySelector("#out")
const show = (value) => { 
    const shown = (typeof value==="ovject"&&v
        alue!==null) ? JSON.stringify(value :value;
    out.textcontent = '${shown}(타입: ${typeof value})';
};
let empty;

document.queryselector("#bStr").addEventlistener("click", () => show("안녕"));
document.querySelector("#bNum").addEventlistener("click", () => show(10));
document.querySelector("#bBool").addEventListener("click", () => show(true));
document.querySelecoer("#bUndef").addEventListener("click", () => show(empty));
document.queryselector("#bMull").addEventlistener("click", () => show(null));
document.querySelector("#bArr").addEventListener("click", () => show([1, "Bob", 10]));   
document.querySelector("#bObj").addEventListener("click", () => show({ name: "Bob" })); 
