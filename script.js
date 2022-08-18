const container = document.querySelector('.container');
const btn = document.querySelector('.btn')
let gridSize = 15;
createGrid(gridSize);

//Create Each box
function createDiv(size){
    const div = document.createElement('div');
    div.classList.add('box')
    div.style.width = `${size}px`
    div.style.height = `${size}px`

    return div;
}

//Make all boxes, changing size to fit inside cube.
function createGrid(gridSize){
    for (i=0 ; i<gridSize ; i++){
        for (j=0 ; j<gridSize ; j++){
            container.appendChild(createDiv(container.clientWidth / gridSize));
        }
    }
}

function reset() {
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
    //createGrid(squareSize);
}

//Change Background color on hover
container.addEventListener('mouseover', function(e){
    if (e.target.matches('.box')) {
        e.target.classList.add('box-active');
      }
})
btn.addEventListener('click', () => {
    reset();
    gridSize = prompt('Please enter grid size')
    createGrid(gridSize);
})
