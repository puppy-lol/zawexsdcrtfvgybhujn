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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
function addUser() {
    user_name = document.getElementById("user_name").value; 
    // username get defined
    localStorage.setItem("user_name", user_name);
    // then let username go to localstorage
    window.location = "kwitter_room.html";
    // then go to kiwi room
}
