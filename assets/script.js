// HINT: You can delete this console.log after you no longer need it!
// console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Phillip Splettstoeszer" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// HTML fields that need to be updated dynamically
let gbQuantity = document.querySelector('#qty-gb')
let ccQuantity = document.querySelector('#qty-cc')
let sugarQuantity = document.querySelector('#qty-sugar')
let totalQuantity = document.querySelector('#qty-total')

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    gb++
    gbQuantity.textContent = gb
    totalQuantity.textContent = gb + cc + sugar
})

// Event Listener for subtracting Gingerbread cookies
document.getElementById('minus-gb').addEventListener('click', function() {
    if (gb > 0) {
        gb--
    }
    gbQuantity.textContent = gb
    totalQuantity.textContent = gb + cc + sugar
})

// Event Listener for adding Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function() {
    cc++
    ccQuantity.textContent = cc
    totalQuantity.textContent = gb + cc + sugar
})

// Event Listener for subtracting Chocolate Chip cookies
document.getElementById('minus-cc').addEventListener('click', function() {
    if (cc > 0) {
        cc--
    }
    ccQuantity.textContent = cc
    totalQuantity.textContent = gb + cc + sugar
})

// Event Listener for adding Sugar cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar++
    sugarQuantity.textContent = sugar
    totalQuantity.textContent = gb + cc + sugar
})

// Event Listener for subtracting Sugar cookies
document.getElementById('minus-sugar').addEventListener('click', function() {
    if (sugar > 0) {
        sugar--
    }
    sugarQuantity.textContent = sugar
    totalQuantity.textContent = gb + cc + sugar
})