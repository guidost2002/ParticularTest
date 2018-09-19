function cambiar(){
  firebase.auth().onAuthStateChanged(function(user) {
  		    if (user) {
  		    console.log("user is signed in")
          var name, email;

          if (user != null) {
            name = user.displayName;
            email = user.email;
          console.log(name+email);
          }
          }
          else {
  		    console.log("no user is signed in")
  		    }
  	          });
}
