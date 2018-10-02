

function writeUserinSubject() {

var materia = "lengua";
var userId = firebase.auth().currentUser.uid;
var about = document.getElementById('desc').value;

  firebase.database().ref('materias/' +materia+'/'+userId).set({
//    uid:userId,
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
  var ref = firebase.database().ref('materias/' +materia);
    ref.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot){
        var key = childSnapshot.key;
        var childData = childSnapshot.val();
        console.log(key);
      });

  });


}
