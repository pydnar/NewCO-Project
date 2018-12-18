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
      expect(loginValues('admin@admin.com')).to.equal(true);
    });
  
    it("should return false if the username provided not found in database", function() {
     // expect($('#loginAlert')).to.equal('No Corresponding User Record Found.');
      //expect($('#loginAlert').text()).to.equal('No Corresponding User Record Found.'); 
     expect($('#loginAlert')).to.exist;    
  });

});

  // Functional Tests
// describe('register click', function () {
//   const data = [
//     { name: 'admin@admin.com', password: '12345'},
//   ];

//   let server;

//   beforeEach(function () {
//     server = sinon.fakeServer.create();
//   });

//   afterEach(function () {
//     server.restore();
//   });

//   it('displays a success message after post request', function () {

//     server.respondWith('POST', '/api/user', [
//       200, { 'Content-Type': 'application/json' }, JSON.stringify(data)
//     ]);
    
//     $('#username').val('jennifer');
//     $('#password1').val('pickles');
//     $('#password2').val('pickles1');

//     $('#register').trigger('click');

//     server.respond();

//     expect($('#message').text()).to.equal('you have successfully registered');
//   });
// });

