const expect = chai.expect;

// describe('', function () {
//     it('', function () {

//     });
//     it('', function () {

//     });
// });

// describe('', function () {
    
//     it('', function () {

//     });
//     it('', function () {

//     });

// });



describe("loginValues", function() {
    it("should return true if the username provided is greater than seven characters", function() {
      expect(loginValues('georgewashington', '12345')).to.equal(true);
    });
  
    it("should return false if the username provided is less than seven characters", function() {
      expect(isValidUsername('gwash')).to.equal(false);
    });
  });

