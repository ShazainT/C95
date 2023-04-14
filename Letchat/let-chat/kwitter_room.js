
//ADD YOUR FIREBASE LINKS HERE


var firebaseConfig = {
      apiKey: "AIzaSyCWasYPlxWkRK7e3cG8eZGCNTAOUdTCzmU",
      authDomain: "kwitter-f8c01.firebaseapp.com",
      databaseURL: "https://kwitter-f8c01-default-rtdb.firebaseio.com",
      projectId: "kwitter-f8c01",
      storageBucket: "kwitter-f8c01.appspot.com",
      messagingSenderId: "32897908192",
      appId: "1:32897908192:web:ebc92a193d4e0b2f70ff85"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome    "    +   user_name + "!";


function addRoom()
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({ 
      purpose : "adding room name"});
      
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
}


function getData()
 {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name'id="+Room_names+ "onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      //End code
      });});
}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

