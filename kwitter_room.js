
 var firebaseConfig = {
      apiKey: "AIzaSyAxx1r7IOhkyRBk6DH4CYFB2i74w14eoZE",
      authDomain: "c93-practice.firebaseapp.com",
      databaseURL: "https://c93-practice-default-rtdb.firebaseio.com",
      projectId: "c93-practice",
      storageBucket: "c93-practice.appspot.com",
      messagingSenderId: "911875630961",
      appId: "1:911875630961:web:bdc9da0128955abbd978d0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="welcome "  +  user_name  +" !";

 function addRoom(){
       room_name=document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose:"adding room name"
       });
       localStorage.setItem("room_name",room_name);
       window.location="kwitter_page.html"
 }

 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+room_name+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;

      
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

} 
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("roome_name");
      window.location="index.html";

}