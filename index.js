// Import readline from node
const readline = require('readline')

// Create reader for command line input/output
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Prompt user for input
console.log('Enter Binary: ')

// On enter run logic
reader.on('line', (value) => {
    // Validate correct value
    let valid = /[0-1]/.test(value)

    // Convert to Decimal
    if (valid) {
    let pow = 0 
    let convertedInt = 0
    for(let i = value.length - 1; i>-1; i--) {
        convertedInt += parseInt(value[i]) * Math.pow(2, pow)
        pow++ 
    }
    console.log(`Converted to Decimal: ${convertedInt}\n`)
    console.log('Enter Binary: ')
    } else {
        console.log('Enter a valid binary number: ')
    }
})