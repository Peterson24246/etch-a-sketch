// Generate the initial divs for the grid
function resetBlocks(e) {
    // Retrieve grid size from input field
    const gridSize = document.querySelector('#grid-size');
    if (!(gridSize.value <= 50 && gridSize.value >= 1)) {
        gridSize.value = '';
        return;
    }
    // Remove all child blocks from the grid
    const currentGrid = document.querySelector('.grid')
    while (currentGrid.firstChild) {
        currentGrid.removeChild(currentGrid.firstChild);
    }
    // Resize grid
    currentGrid.style['grid-template-columns'] = `repeat(${gridSize.value}, 1fr)`;
    // Create and add new white blocks to the grid
    for (let i = 0; i < gridSize.value**2; i++) {
        const newBlock = document.createElement('div');
        newBlock.classList.add('block')
        newBlock.style['background-color'] = 'white';
        currentGrid.appendChild(newBlock);
        // Add mouse over event listeners to all of the blocks
        const blocks = document.querySelectorAll('.block');
        blocks.forEach(item => item.addEventListener('mouseover', colorChange));
    }
    gridSize.value = '';
}

// Change the color of an individual block when moused over
function colorChange(e) {
    console.log(e.target);
    this.style['background-color'] = 'black';
}


// Begin by resetting grid to generate all elements, with a defualt grid of 16x16
document.querySelector('#grid-size').value = 16;
resetBlocks()

// Add functionality of the reset button and custom-button
const customButton = document.querySelector('#custom-button');
customButton.addEventListener('click', resetBlocks);
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {
    document.querySelector('#grid-size').value = 16;
    resetBlocks()
});


