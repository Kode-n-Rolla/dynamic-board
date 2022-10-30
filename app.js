const board = document.querySelector('#board') // access to board in html file
const colors = ['#FF3C38', '#F44708', '#358600', '#E7E247', '#B81365', '#EDF2F4', '#2A1E5C'] //array colors
const squaresCount = 500 // total count of squares

for (let i = 0; i < squaresCount; i++) {
    // Create div block on each iteration
    const square = document.createElement('div')

    // Create class square on each iteration in block div
    square.classList.add('square')

    // Action with mouse over the square(add color)
    square.addEventListener('mouseover', () => setColor(square))

    // Action with mouse leave the square(remove color)
    square.addEventListener('mouseleave', () => removeColor(square))

    // Append class square in html file
    board.append(square)
}

// Function to add square color
function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` //add shadow, light effect
}

// Function to remove square color
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

// Function to get random color
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}