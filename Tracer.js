function addUser(){
    user = document.getElementById("Un").value;
    localStorage.setItem("Usern", user);
    window.location = "Tracer_room.html";
}