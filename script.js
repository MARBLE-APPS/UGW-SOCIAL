
  var firebaseConfig = {
   apiKey: "AIzaSyAUK_0bF5lN70YtrpN7R2jSYWW5antwPnE",
   authDomain: "chat---fire.firebaseapp.com",
   databaseURL: "https://chat---fire-default-rtdb.firebaseio.com",
   projectId: "chat---fire",
   storageBucket: "chat---fire.appspot.com",
   messagingSenderId: "467393148755",
   appId: "1:467393148755:web:8c7c4abcac04392b7a13a6",
   measurementId: "G-MNP1HB7NV2"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
 localStorage.setItem("email" , email.value);
 localStorage.setItem("user" , password.value);

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
    window.location.href="chat.html";
  }
  

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    window.location.href("chat.html");
  
  }



  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      
      alert("Active user "+email);
      window.location.href="chat.html";
    
  localStorage.setItem("email" , email);


    }else{
      alert("No Active user Found");
    }
  })






setInterval(function() {
var email = document.getElementById("email").value;

var password = document.getElementById("password").value;

  if (email , password != "") {
    document.getElementById("signUp").disabled = false;
  } else {
    document.getElementById("signUp").disabled = true;
  }
}, 100)







setInterval(function() {
  var email = document.getElementById("email").value;
  
  var password = document.getElementById("password").value;
  
  
  if (email , password != "") {
    document.getElementById("signIn").disabled = false;
  } else {
    document.getElementById("signIn").disabled = true;
  }
}, 100)
