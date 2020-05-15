// Declaraciones de variables y grid inicial
let gridContainer = document.querySelector('#gridContainer');
let clearBtn = document.querySelector('#clear');
let newCanvas = document.querySelector('#canvas');
let val = 16;
let i = 1;
gridContainer.style.gridTemplate = `repeat(${val}, 1fr) / repeat(${val}, 1fr)`
for(i; i <= Math.pow(val, 2); i++) {
    let gridElement = document.createElement('div');
    gridElement.style.gridArea = 'auto';
    gridElement.classList.add('gridElement');
    gridContainer.appendChild(gridElement);
}
let grid = Array.from(document.querySelectorAll('.gridElement'));



// Functions
function canvas() {
    let newVal = prompt();
    gridContainer.style.gridTemplate = `repeat(${newVal}, 1fr) / repeat(${newVal}, 1fr)`;
    for(i; i <= Math.pow(val, 2); i++) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    for(i; i <= Math.pow(newVal, 2); i++) {
        let gridElement = document.createElement('div');
        gridElement.style.gridArea = 'auto';
        gridElement.classList.add('gridElement');
        gridContainer.appendChild(gridElement);
        }
    val = newVal;
    grid = Array.from(document.querySelectorAll('.gridElement'));
    coloring();
}
function clear() {
    grid.forEach((element) => {
        element.classList.remove('black');
    })
}
function coloring() { 
    grid.forEach((element) => {
        element.addEventListener('mousemove', () => {
            element.classList.add('black');
        });
    });
}



// Listeners
clearBtn.addEventListener('click', clear);
newCanvas.addEventListener('click', canvas);
coloring()
