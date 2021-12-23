var firebaseConfig = {
      apiKey: "AIzaSyAm2qJyENNM_SmTHVMxi4j2Q3lH3Q6xT-c",
      authDomain: "kwitter-4c4ad.firebaseapp.com",
      databaseURL: "https://kwitter-4c4ad-default-rtdb.firebaseio.com",
      projectId: "kwitter-4c4ad",
      storageBucket: "kwitter-4c4ad.appspot.com",
      messagingSenderId: "65234163808",
      appId: "1:65234163808:web:f9a47b6492ade17ac94b05"
    };
    
    
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                like:0,
                message:msg
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
