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


firebase.initializeApp(firebaseConfig);
firebase.analytics();


var name = localStorage.getItem("user");

function send() {
  var msg = document.getElementById('msg_text').value;
  if (msg != "") {
    firebase.database().ref("messages").push({
      msg: msg,
      sender: name

    }).then(function() {
      document.getElementById('msg_text').value = "";
      

      
    })
  }
}

firebase.database().ref("messages").on("child_added", function(snapshot) {
  var username = snapshot.val().sender;
  var msg = snapshot.val().msg;
  var html = "";
  if (username == name) {
    html += "<div class='message_me' align='right'><p class='user'>" + username + "</p>"+ "<p class='msg_me'>" + msg + "</p>" + "</div>";
    document.getElementById("box_messages").innerHTML += html;

  } else {
    html += "<div class='message_user' align='left'><p class='user'>" + username + "</p><p>" + "<p class='msg_user'>" + msg + "</p>" + "</div>";
    document.getElementById("box_messages").innerHTML += html;
  }

  var div_obj = document.getElementById("box_messages");
  
  div_obj.scrollTop = div_obj.scrollHeight;
  
  
});
