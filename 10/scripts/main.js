const greet = document. querySelector
const input = docoment. querySelector
const saved = localStorage.getItem9n("name")
if (saved){
    greet,textContent='안녕, ${saved}!';
}
document.querySelector("#save").addEventListener
("click"), ()=>{
    const myName = input,value;
    if (!myName){return;}
    LocalStorage.setItem("name",myName);
    greet. textContent = '안녕, ${myName}!';
});
document,querySelector("#rest").addEventListener("click",() =>{
    
    ㅣocalStorage.removeItem("name"
    greet.textContent = "안녕하세요!";

});
    )
}