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
    it("should return true if the user returned from api call is admin", function() {
      //expect(loginValues(emailv, 'admin@admin.com')).to.equal(true);
    });
  
    it("should return false if the username provided is not in db", function() {
      // expect(isValidUsername('gwash')).to.equal(false);
    });
  });

  // Functional Tests
describe('register Login', function () {
  const data = [
    { name: 'admin@admin.com', password: '123456'},
  ];

  let server;

  beforeEach(function () {
    server = sinon.fakeServer.create();
  });

  afterEach(function () {
    server.restore();
  });

  it('displays a success message after post request', function () {

    server.respondWith('GET', '/api/getuser', [
      200, { 'Content-Type': 'application/json' }, JSON.stringify(data)
    ]);


    $('#username').val('admin@admin.com');
    $('#password').val('123456');
    // $('#password2').val('pickles1');

    $('#submitLogin').trigger('click');

    server.respond();

     // expect($('#message').text()).to.equal('you have successfully registered');
    // expect($('#loginAlert').text()).to.equal('No Corresponding User Record Found.');
    // expect($('#loginAlert')).to.contain('No Corresponding User Record Found.');

  });
});

