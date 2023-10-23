// Import the assert module
const assert = require('assert');

// Define the calculator object
const calculator = {
    // Define the current value of the calculator
    currentValue: 0,

    // Add a number to the current value
    add: function(num) {
        this.currentValue += num;
    },

    // Subtract a number from the current value
    subtract: function(num) {
        this.currentValue -= num;
    },

    // Multiply the current value by a number
    multiply: function(num) {
        this.currentValue *= num;
    },

    // Divide the current value by a number
    divide: function(num) {
        this.currentValue /= num;
    },

    // Clear the current value
    clear: function() {
        this.currentValue = 0;
    }
};

// Define the unit tests for the subtract method
describe('subtract', function() {
    beforeEach(function() {
        // Reset the calculator before each test
        calculator.currentValue = 0;
    });

    it('should subtract a positive number from the current value', function() {
        calculator.currentValue = 5;
        calculator.subtract(3);
        assert.equal(calculator.currentValue, 2);
    });

    it('should subtract a negative number from the current value', function() {
        calculator.currentValue = 5;
        calculator.subtract(-3);
        assert.equal(calculator.currentValue, 8);
    });

    it('should subtract zero from the current value', function() {
        calculator.currentValue = 5;
        calculator.subtract(0);
        assert.equal(calculator.currentValue, 5);
    });
});