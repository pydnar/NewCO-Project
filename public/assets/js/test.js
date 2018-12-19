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
      expect(loginValues(emailv, 'admin@admin.com')).to.equal(true);
    });
  
    it("should return false if the username provided is less than seven characters", function() {
      expect(isValidUsername('gwash')).to.equal(false);
    });
  });

  // Functional Tests
describe('register click', function () {
  const data = [
    { name: 'admin@admin.com', password: '12345'},
  ];

  let server;

  beforeEach(function () {
    server = sinon.fakeServer.create();
  });

  afterEach(function () {
    server.restore();
  });

  it('displays a success message after post request', function () {

    server.respondWith('POST', '/api/user', [
      200, { 'Content-Type': 'application/json' }, JSON.stringify(data)
    ]);
    
    $('#username').val('jennifer');
    $('#password1').val('pickles');
    $('#password2').val('pickles1');

    $('#register').trigger('click');

    server.respond();

    expect($('#message').text()).to.equal('you have successfully registered');
    expect($('#loginAlert').text()).to.equal('No Corresponding User Record Found.');
    expect($('#loginAlert')).to.contain('No Corresponding User Record Found.');

  });
});

