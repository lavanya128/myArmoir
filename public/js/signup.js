$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var passwordInput = $("input#password-input");
  var dob = $("input#dob-input");
  //var gender = $('input[name="genderS"]:checked').value;
  var uName = $("input#username-input");
  var confirmpass = $("input#confirmpassword-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      dob: dob.val().trim(),
      //gender: gender.val().trim(),
      uName: uName.val().trim(),
      confirmpass: confirmpass.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.dob, userData.uName, userData.confirmpass);
    emailInput.val("");
    passwordInput.val("");
    dob.val("");
    uName.val("");
    confirmpass.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, dob, uName, confirmpass) {
    console.log(email, password)
    $.post("/api/signup", {
      email: email,
      password: password,
      dob: dob,
      uName: uName,
      confirmpass: confirmpass
    }).then(function(data) {
      console.log(data);
      // window.location.replace(data);
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
