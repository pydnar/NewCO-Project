$(document).ready(() => {
  var currentuser;

  // Config for Firebase App
  var firebaseConfig = {
    apiKey: "AIzaSyCimbU1-NaYNPz_sZFEOXOetAPLZjwo_do",
    authDomain: "driven-rig-186815.firebaseapp.com",
    databaseURL: "https://driven-rig-186815.firebaseio.com",
    projectId: "driven-rig-186815",
    storageBucket: "driven-rig-186815.appspot.com",
    messagingSenderId: "742859722146"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  $("#submitLogin").click(function () {
    // Grab data from user form
    event.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();

    var values = {
      email,
      password
    };
    //

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function () {
        console.log("You are now logged in");

        var user = firebase.auth().currentUser;
        currentuser = {
          email: user.email,
          uid: user.uid
        };
        console.log(currentuser.uid);
        //Login with mail and save
        localStorage.setItem("userprofile", currentuser.email);
        // alert(localStorage.getItem("userprofile"));

//Need to define ROUTE for where user should land once authenticated.
        $.ajax("/login/" + email + "/" + password, {
          method: "POST",
          async: false,

          data: values
          //Init values are coming from the login
        }).then(function (res) {
          //   userandassets = res;

          window.location.href = "/home/" + localStorage.getItem("userprofile");
        }); //End of ajax call
      })
      .catch(function (error) {
        var errorC = error.code;
        var errorM = error.message;
        console.log(errorC, errorM);
        $("#loginAlert").text("There is no user record corresponding to this");
      });
  });

  $("#submitSignout").click(function () {
    localStorage.removeItem("userprofile");
    $("username").val("");

    firebase
      .auth()
      .signOut()
      .then(function () {
        // alert("You have been logged out");

        window.location.href = "/";
      })
      .catch(function (error) {
        var errorC = error.code;
        var errorM = error.message;
        console.log(errorC, errorM);
      });
  });

  $("#submitSignup").click(function () {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newUser = {
      id_email: $("#email")
        .val()
        .trim(),
      firstname: $("#first")
        .val()
        .trim(),
      lastname: $("#last")
        .val()
        .trim(),
      phone: $("#phone")
        .val()
        .trim(),
      address: $("#address")
        .val()
        .trim(),
      isagent: 1,
      userpassword: $("#password")
        .val()
        .trim(),
      useractive: 0
    };
    $.ajax("/api/newuser", {
      type: "POST",
      data: newUser
    }).then(function (res) {
      f =
        "/users/" +
        $("#email")
          .val()
          .trim();

      // Create new user in firebase now.

      firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.id_email, newUser.userpassword)
        .then(function () {
          alert("new user created");
        });

      console.log(newUser.firstname);

      window.location.href = "/";
      //location.reload();
    });
  });

});