
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDNKCBAcFLOp8jWKW5WsFXL08rbnGYGVRY",
      authDomain: "kwitter-eb8bf.firebaseapp.com",
      databaseURL: "https://kwitter-eb8bf-default-rtdb.firebaseio.com",
      projectId: "kwitter-eb8bf",
      storageBucket: "kwitter-eb8bf.appspot.com",
      messagingSenderId: "955690555327",
      appId: "1:955690555327:web:05f7044b7b54ed29dcf30a",
      measurementId: "G-Y17CM80SNF"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome! " + user_name; 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
