document.getElementById("user_div").style.display = "none";
document.getElementById("login_div").style.display = "block";

function register(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  var userName = document.getElementById("nombre_field").value;
  var userSurname = document.getElementById("apellido_field").value;
  var userPhone = document.getElementById("number_field").value;
  writeUserData(userName,userPass,userEmail,userPhone);


  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {

//  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}
function writeUserData(name,surname, email, phone) {
  firebase.database().ref('usuarios/').push({
    name: name,
    surname:surname,

    email: email,
    phone:phone
  }, function(error) {
    if (error) {
      window.alert("The write failed... ");
      // The write failed...
    } else {
      window.alert("Data saved successfully");
      // Data saved successfully!
    }
  });
}