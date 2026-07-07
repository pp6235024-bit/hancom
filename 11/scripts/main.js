const n = document.querySelector("#n")
const out = document.querySelector("#out");
document.querySelector('"#run").addEventListener
    ("click", () =>{
        out.inner HTML = "";
        const count = Numver(n.value);
        for(let i = 1; i <+count;i++){
            const li+document,createElement("li");
            li,textcontent='${i}번쨰 🍎';
           out.appendChild(li);

        }
    });
    document.querySelector('#dowm".addEventlistener
        ("click', () =>{
            out.innerHTML = "";
        let i = Number(n value);
    while(i>0){
        const li=document.createElement("li");
        li.textContent = i;
        out.appendChild(li);
        i--;
    }});