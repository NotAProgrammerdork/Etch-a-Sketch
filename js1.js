// Declaraciones de variables y grid inicial
let gridContainer = document.querySelector('#gridContainer');
let clearBtn = document.querySelector('#clear');
let newCanvas = document.querySelector('#canvas');
let border = document.querySelector('#lgt');
let val = 16;
let i;
gridContainer.style.gridTemplate = `repeat(${val}, 1fr) / repeat(${val}, 1fr)`
for(i = 1; i <= Math.pow(val, 2); i++) {
    let gridElement = document.createElement('div');
    gridElement.style.gridArea = 'auto';
    gridElement.classList.add('gridElement');
    gridContainer.appendChild(gridElement);
}
let grid = Array.from(document.querySelectorAll('.gridElement'));



// Functions
function canvas() {
    clear();
    let newVal = prompt();
    gridContainer.style.gridTemplate = `repeat(${newVal}, 1fr) / repeat(${newVal}, 1fr)`;
    if(val > newVal) {
        let valMax = Math.pow(val, 2) - Math.pow(newVal, 2);
        for(i = 1; i <= valMax; i++) {
            gridContainer.removeChild(gridContainer.lastChild);
        }
    }
    if(val < newVal) {
        let valMin = Math.pow(newVal, 2) - Math.pow(val, 2);
        for(i = 1; i <= valMin; i++) {
            let gridElement = document.createElement('div');
            gridElement.style.gridArea = 'auto';
            gridElement.classList.add('gridElement');
            gridContainer.appendChild(gridElement);
        }
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
function lightgray() {
    grid.forEach((element) => {
        element.classList.toggle('lightgrayborder')
    })
}


// Listeners
clearBtn.addEventListener('click', clear);
newCanvas.addEventListener('click', canvas);
border.addEventListener('click', lightgray);
coloring()
