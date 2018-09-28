firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var userId=firebase.auth().currentUser.uid;
    console.log(user.email);
    console.log(user.uid);
    var ref = firebase.database().ref("usuarios/"+userId);
  ref.once("value")
    .then(function(snapshot) {
      var name = snapshot.child("name").val(); // {first:"Ada",last:"Lovelace"}
      var firstName = snapshot.child("name").val(); // "Ada"
      var lastName = snapshot.child("surname").val(); // "Lovelace"
      var age = snapshot.child("phone").val(); // null
      alert("Bienvenido: "+firstName+" "+lastName);
    });
    // User is signed in.
  } else {
    console.log("No hay usuarios");
    // No user is signed in.
  }
});
