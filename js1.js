let gridContainer = document.querySelector('#gridContainer');

for(let i = 1; i <= 256; i++) {
    let gridElement = document.createElement('div');
    gridElement.style.gridArea = 'auto';
    gridElement.classList.add('gridElement');
    gridContainer.appendChild(gridElement);
}

/*
div.gridElement:hover {
    background-color: black;
}
*/

let gridElements = Array.from(document.querySelectorAll('.gridElement'));

gridElements.forEach((element) => {
    element.addEventListener('mousedown', () => {
        element.classList.toggle('black');
    });
});

