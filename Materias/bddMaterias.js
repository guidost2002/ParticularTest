

function writeUserinSubject() {
var materia = "lengua";
var userId = firebase.auth().currentUser.uid;
var about = document.getElementById('desc');
  firebase.database().ref('materias/' +materia+'/'+userId).set({
    uid:userId,
    description:about
  }, function(error) {
    if (error) {
      window.alert("The write failed... ");
      // The write failed...
    } else {
      window.alert("Data saved successfully");

    }
  });
}
  function traer(){
 var materia = "lengua";
  var uid;
  var userId = firebase.auth().currentUser.uid;
  var ref = firebase.database().ref('materias/' +materia+'/'+userId);
    ref.once("value")
    .then(function(snapshot) {
      var descri = snapshot.child("descripcion").val(); // {first:"Ada",last:"Lovelace"}
      uid = snapshot.child("uid").val(); // "Ada"
      document.getElementById('des').innerHTML+= descri;
    var ref = firebase.database().ref("usuarios/"+uid);
  ref.once("value")
    .then(function(snapshot) {
      var name = snapshot.child("name").val(); // {first:"Ada",last:"Lovelace"}
      var firstName = snapshot.child("name").val(); // "Ada"
      var lastName = snapshot.child("surname").val(); // "Lovelace"
      var age = snapshot.child("phone").val(); // null
      document.getElementById('nom').innerHTML+= lastName;
    });
  });


}
