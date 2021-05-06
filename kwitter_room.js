
//ADD YOUR FIREBASE LINKS HERE
  var firebaseConfig = {
    apiKey: "AIzaSyA_bPWm9zfOt9ldatkb352YheKvo1jUUgk",
    authDomain: "twitterjr-f9c25.firebaseapp.com",
    databaseURL: "https://twitterjr-f9c25-default-rtdb.firebaseio.com",
    projectId: "twitterjr-f9c25",
    storageBucket: "twitterjr-f9c25.appspot.com",
    messagingSenderId: "376488659831",
    appId: "1:376488659831:web:80f2f1d99629ac3fa62f72",
    measurementId: "G-5P1SVCFKWZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose: "adding room name"}); 
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name- " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
