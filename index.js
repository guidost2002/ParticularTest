var alogout =document.getElementById('alogout');
var alogin =document.getElementsByClassName('alogin');
var aregistro =document.getElementsByClassName('aregistro');
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("Hay");
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";



    }
    // User is signed in.
   else {
     document.getElementById("user_div").style.display = "none";
     document.getElementById("login_div").style.display = "block";
    // No user is signed in.
  }
});
function logout(){
  firebase.auth().signOut()
    .then(function() {
window.location.href= 'index.html';
      // Sign-out successful.
    })
    .catch(function(error) {
      // An error happened
    });

}
