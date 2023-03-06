
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyC7pbSQZwN-N962eklTdkJw8b5rWI2s2oU",
      authDomain: "kwitter-e2b90.firebaseapp.com",
      databaseURL: "https://kwitter-e2b90-default-rtdb.firebaseio.com",
      projectId: "kwitter-e2b90",
      storageBucket: "kwitter-e2b90.appspot.com",
      messagingSenderId: "66981539359",
      appId: "1:66981539359:web:37e9db08ac803855f56f2a"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
