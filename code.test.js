const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js') + '');

// Test for factorial function
function testFactorial() {
    assert(factorial(0) === 1, 'Factorial of 0 should be 1');
    assert(factorial(1) === 1, 'Factorial of 1 should be 1');
    assert(factorial(2) === 2, 'Factorial of 2 should be 2');
    assert(factorial(3) === 6, 'Factorial of 3 should be 6');
    assert(factorial(10) === 3628800, 'Factorial of 10 should be 3628800');
    console.log('All factorial tests passed');
}

// Test for e function
function testE() {
    const epsilon = 1e-10; // Allow a small error margin for floating point comparisons
    assert(Math.abs(e(0) - 1) < epsilon, 'e(0) should be close to 1');
    assert(Math.abs(e(1) - 2) < epsilon, 'e(1) should be close to 2');
    assert(Math.abs(e(10) - 2.7182818011463845) < epsilon, 'e(10) should be close to 2.7182818011463845');
    assert(Math.abs(e(20) - 2.718281828459045) < epsilon, 'e(20) should be close to 2.718281828459045');
    console.log('All e function tests passed');
}

// Run all tests
try {
    testFactorial();
    testE();
    console.log('All tests passed');
} catch (error) {
    console.error('Test failed:', error.message);
}
