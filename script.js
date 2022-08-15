const gridWidth = 16;
const gridHeight = 16;

let totalDiv = gridHeight * gridWidth;

const container = document.querySelector('.container');

function createBox (size){
    for (i=0 ; i < totalDiv; i++){
        const box = document.createElement('div');
        box.classList.add('box')
        div.style.width = `${size}px` 
        div.style.height = `${size}px` 
        container.appendChild(box);
    }
}

console.log(createBox(64));

