
const root = document.getElementById("root");
setInterval(printTime, 1000);

function printTime(){
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const h1 = document.createElement("h1");
    const time = document.createTextNode(`${d.toLocaleTimeString()} `);
    h1.append(time);
    if(root.firstElementChild){
        root.replaceChild(h1, root.firstElementChild);
    }
    root.append(h1)

}