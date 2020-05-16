// Declaraciones de variables y grid inicial
let gridContainer = document.querySelector('#gridContainer');
let clearBtn = document.querySelector('#clear');
let newCanvas = document.querySelector('#canvas');
let border = document.querySelector('#lgt');
let input = document.querySelector('input');
let value = 16;
let lghttimer = 0;
let penNumber = 0;
let i;
gridContainer.style.gridTemplate = `repeat(${value}, 1fr) / repeat(${value}, 1fr)`
for(i = 1; i <= Math.pow(value, 2); i++) {
    let gridElement = document.createElement('div');
    gridElement.style.gridArea = 'auto';
    gridElement.classList.add('gridElement');
    gridContainer.appendChild(gridElement);
}
let grid = Array.from(document.querySelectorAll('.gridElement'));



// Functions
function canvas() {
    clear();
    let newVal = Number(prompt());
    // Me costó esta parte, si el usuario va a usar números DECLARA que son números
    if(value > newVal) {
        let valMax = Math.pow(value, 2) - Math.pow(newVal, 2);
        for(i = 1; i <= valMax; i++) {
            gridContainer.removeChild(gridContainer.lastChild);
        }
    }
    if(value < newVal) {
        let valMin = Math.pow(newVal, 2) - Math.pow(value, 2);
        for(i = 1; i <= valMin; i++) {
            let gridElement = document.createElement('div');
            gridElement.style.gridArea = 'auto';
            gridElement.classList.add('gridElement');
            if(lghttimer === 1) {
                gridElement.classList.add('lightgrayborder');
            }
            gridContainer.appendChild(gridElement);
        }
    }
    gridContainer.style.gridTemplate = `repeat(${newVal}, 1fr) / repeat(${newVal}, 1fr)`;
    grid = Array.from(document.querySelectorAll('.gridElement'));
    value = newVal;
    coloring();
}
function clear() {
    grid.forEach((element) => {
        element.style.backgroundColor = '#fff';
    })
}
function coloring() { 
    grid.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            let rScheme = Math.floor(Math.random() * 255) + 1;
            let gScheme = Math.floor(Math.random() * 255) + 1;
            let bScheme = Math.floor(Math.random() * 255) + 1;
            let aScheme = Math.random();
            element.style.backgroundColor =  `rgb(${rScheme}, ${gScheme}, ${bScheme}, ${aScheme})`;
        });
    });
}
function lightgray() {
    if(lghttimer === 1) {
        grid.forEach((element) => {
            element.classList.remove('lightgrayborder');
            lghttimer = 0;
        })
        return;
    } else if (lghttimer === 0) {
        grid.forEach((element) => {
            element.classList.add('lightgrayborder');
        })
    }
    lghttimer = 1;
}



// Listeners
clearBtn.addEventListener('click', clear);
newCanvas.addEventListener('click', canvas);
border.addEventListener('click', lightgray);
coloring()
