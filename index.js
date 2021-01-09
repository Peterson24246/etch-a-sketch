// Generate the initial divs for the grid
function resetBlocks(e) {
    const currentGrid = document.querySelector('.grid')
    while (currentGrid.firstChild) {
        currentGrid.removeChild(currentGrid.firstChild);
    }
    for (let i = 0; i < 256; i++) {
        const newBlock = document.createElement('div');
        newBlock.classList.add('block')
        newBlock.style['background-color'] = 'white';
        currentGrid.appendChild(newBlock);
        // Add mouse over event listeners to all of the blocks
        const blocks = document.querySelectorAll('.block');
        blocks.forEach(item => item.addEventListener('mouseover', colorChange));
    }
}

function colorChange(e) {
    console.log(e.target);
    this.style['background-color'] = 'black';
}


// Begin by resetting grid to generate all elements
resetBlocks()

// Add functionality of the reset button
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', resetBlocks);


