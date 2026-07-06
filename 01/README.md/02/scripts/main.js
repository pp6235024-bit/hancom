const naaameinput = document.queryselector("#name");
const out=document.queryselector("#out");
document.queryselector("#greet").addeventlistene
r("clock",() => {
    let myName=naaameinput.value;
    out.textCtent='안녕, ${myName}!';
});