let gridContainer = document.querySelector('#gridContainer');
let clearBtn = document.querySelector('#clear');

for(let i = 1; i <= 256; i++) {
    let gridElement = document.createElement('div');
    gridElement.style.gridArea = 'auto';
    gridElement.classList.add('gridElement');
    gridContainer.appendChild(gridElement);
}

let gridElements = Array.from(document.querySelectorAll('.gridElement'));
gridElements.forEach((element) => {
    element.addEventListener('mousedown', () => {
        element.classList.toggle('black');
    });
});

clearBtn.addEventListener('click', () => {
    gridElements.forEach((element) => {
        element.classList.remove('black');
    })
})
