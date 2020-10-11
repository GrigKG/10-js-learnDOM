const box = document.getElementById("box")
const container = document.getElementById("container");
let pos = 1;
let k = 1;
let size = container.clientHeight;
const  t = setInterval(move, 10);

function move() {
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
    box.style.backgroundColor = `rgb(255,${255*(1-pos/size)},0)`;
    container.style.backgroundColor = `rgb(${0},${255*(1-pos/size)},${255*(1-pos/size)})`;
    pos=pos+k;
    if(pos < 0){
        k=1
    }
    if(pos >= size-box.clientHeight+1){
        k=-1
    }
}