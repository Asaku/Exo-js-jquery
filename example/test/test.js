var assert = require('assert');
var main = require('../js/main.js');

console.log(main)

describe('Array', function() {
    describe('test function somme', function() {
        it('should be equal', function() {
            assert.equal(somme([1,2,3]), 6);
        });
    });
});
