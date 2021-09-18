var U_n = localStorage.getItem("Usern");
document.getElementById("wcuser").innerHTML = "Welcome " + U_n;

function addRoomname()
{
      var room_n = document.getElementById("rn").value;
      firebase.database().ref("/").child(room_n).update({
            purpose : "Adding Room"
      });
      localStorage.setItem("room_name", room_n);
      window.location = "kwitter_page.html";
}
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCSE3ID3Mx1oZHg8wtragzOD2ERO6wT6vU",
      authDomain: "kwitter-37dd8.firebaseapp.com",
      databaseURL: "https://kwitter-37dd8-default-rtdb.firebaseio.com",
      projectId: "kwitter-37dd8",
      storageBucket: "kwitter-37dd8.appspot.com",
      messagingSenderId: "713367047841",
      appId: "1:713367047841:web:ef659041048c380b01aae0"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div id=" + Room_names + " onclick='redirectToRoomName(this.id)' class='room_name'> # " + Room_names + "</div><hr>"
      document.getElementById("output").innerHTMl+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
