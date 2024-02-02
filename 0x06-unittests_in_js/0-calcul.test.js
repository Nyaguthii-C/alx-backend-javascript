/*
test cases for calculateNumber() function
*/
const assert = require('assert')
const calculateNumber = require('./0-calcul')


describe('Test rounding and addition', () => {
    describe('addition of whole numbers', () => {
        it('should return a sum of the two numbers', () => {
            const res = calculateNumber(1,3)
            assert.strictEqual(res, 4)     
        });
    });
    describe('ceil second param then sum', () => {
      it('should ceil second param then sum', () => {
          const res = calculateNumber(1, 3.7)
          assert.strictEqual(res, 5)     
      });
    });
    describe('floor first param and ceil second param then sum', () => {
      it('ceil and floor then add', () => {
          const res = calculateNumber(1.2, 3.7)
          assert.strictEqual(res, 5)     
      });
    });
    describe('ceil both params then sum', () => {
      it('should ceil both params then sum', () => {
          const res = calculateNumber(1.5 , 3.7)
          assert.strictEqual(res, 6)     
      });
    });
});
  
  
 
  
