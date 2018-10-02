

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
/*function traer(){
  var xd = agarrar();
  console.log(xd);
}*/
function usarId(idd){
  var ref = firebase.database().ref('materias/'+idd);
  ref.once("value")
    .then(function(snapshot) {
      var name = snapshot.child("name").val(); // {first:"Ada",last:"Lovelace"}
      var firstName = snapshot.child("name").val(); // "Ada"
      var lastName = snapshot.child("surname").val(); // "Lovelace"
      var age = snapshot.child("phone").val(); // null
      console.log("Bienvenido: "+firstName+" "+lastName);
    });
}

  function traer(){
 var materia = "lengua";
  var ref = firebase.database().ref('materias/' +materia);
  ref.once('value',function (snap){
    snap.forEach(function(item){
      var itemVal = item.val();
      var arrayy;
      arrayy.toArray(snap.val());
    });
    for (i=0; i<arrayy.length; i++)
    {
      usarId(arrayy[i]);
    }
  });
}
