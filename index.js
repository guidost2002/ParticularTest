firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user.email);
    // User is signed in.
  } else {
    console.log("No hay usuarios");
    // No user is signed in.
  }
});
