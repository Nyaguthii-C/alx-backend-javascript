/*
test cases for calculateNumber() function with various calc types
*/
const assert = require('assert')
const calculateNumber = require('./1-calcul')


/* Test suite for type=SUM*/
describe('Test for type SUM', () => {
    describe('addition of whole numbers', () => {
        it('should return a sum of the two numbers', () => {
            const res = calculateNumber('SUM', 1, 3)
            assert.strictEqual(res, 4)     
        });
    });
    describe('ceil second param then sum', () => {
      it('should ceil second param then sum', () => {
          const res = calculateNumber('SUM', 1, 3.7)
          assert.strictEqual(res, 5)     
      });
    });
    describe('ceil first param then sum', () => {
      it('should ceil first param then sum', () => {
          const res = calculateNumber('SUM', 1.6, 3)
          assert.strictEqual(res, 5)     
      });
    });
    describe('floor first param and ceil second param then sum', () => {
      it('ceil and floor then add', () => {
          const res = calculateNumber('SUM', 1.2, 3.7)
          assert.strictEqual(res, 5)     
      });
    });
    describe('ceil both params then sum', () => {
      it('should ceil both params then sum', () => {
          const res = calculateNumber('SUM', 1.5 , 3.7)
          assert.strictEqual(res, 6)     
      });
    });
    describe('floor both params then sum', () => {
      it('should floor both param then sum', () => {
          const res = calculateNumber('SUM', 1.3, 3.4)
          assert.strictEqual(res, 4)     
      });
    });
});

/* Test suite for type=SUBTRACT*/
describe('Test for type SUBTRACT', () => {
  describe('subtracting whole numbers', () => {
      it('should return the difference of the two numbers', () => {
          const res = calculateNumber('SUBTRACT', 7, 3)
          assert.strictEqual(res, 4)     
      });
  });
  describe('ceil second param then subtract', () => {
    it('should ceil second param then subtract', () => {
        const res = calculateNumber('SUBTRACT', 1, 3.7)
        assert.strictEqual(res, -3)     
    });
  });
  describe('ceil first param then subtract', () => {
    it('should ceil first param then subtract', () => {
        const res = calculateNumber('SUBTRACT', 5.6, 3)
        assert.strictEqual(res, 3)     
    });
  });
  describe('floor first param and ceil second param then subtract', () => {
    it('ceil and floor then subtract', () => {
        const res = calculateNumber('SUBTRACT', 8.2, 3.7)
        assert.strictEqual(res, 4)     
    });
  });
  describe('ceil both params then subtract', () => {
    it('should ceil both params then subtract', () => {
        const res = calculateNumber('SUBTRACT', 9.5 , 3.7)
        assert.strictEqual(res, 6)     
    });
  });
  describe('floor both params then subtract', () => {
    it('should floor both param then subtract', () => {
        const res = calculateNumber('SUBTRACT', 1.3, 3.4)
        assert.strictEqual(res, -2)     
    });
  });
});
/* Test suite for type=DIVIDE*/
describe('Test for type DIVIDE', () => {
  describe('Divition of whole numbers', () => {
      it('should return the  division of the two numbers', () => {
          const res = calculateNumber('DIVIDE', 6, 3)
          assert.strictEqual(res, 2)     
      });
  });
  describe('ceil second param then divide', () => {
    it('should ceil second param then divide', () => {
        const res = calculateNumber('DIVIDE', 8, 3.7)
        assert.strictEqual(res, 2)     
    });
  });
  describe('ceil first param then divide', () => {
    it('should ceil first param then divide', () => {
        const res = calculateNumber('DIVIDE', 5.6, 3)
        assert.strictEqual(res, 2)     
    });
  });
  describe('floor first param and ceil second param then divide', () => {
    it('ceil and floor then divide', () => {
        const res = calculateNumber('DIVIDE', 1.4, 4.5)
        assert.strictEqual(res, 0.2)     
    });
  });
  describe('ceil both params then divide', () => {
    it('should ceil both params then divide', () => {
        const res = calculateNumber('DIVIDE', 1.5 , 3.7)
        assert.strictEqual(res, 0.5)     
    });
  });
  describe('floor both params then divide', () => {
    it('should floor both param then divide', () => {
        const res = calculateNumber('DIVIDE', 1.3, 4.4)
        assert.strictEqual(res, 0.25)     
    });
  });
  describe('check for error return', () => {
    it('should return string Error', () => {
        const res = calculateNumber('DIVIDE', 2, 0)
        assert.strictEqual(res, 'Error')     
    });
  });
});