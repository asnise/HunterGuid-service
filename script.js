
var request = new XMLHttpRequest();
var data = "";
request.open('GET', 'data.json', true);

request.onload = function(){ 
    if (request.status >= 200 && request.status < 400) {
    // Success!
    data = JSON.parse(request.responseText);
    console.log('data',data);
  } else {
    
  }
};
request.send();

function send_id() {
    var profile_id = document.getElementById("myInput").value;

    if((profile_id in data))
    {
        document.getElementById("name").innerHTML = "Name : "+data[profile_id].nickname;
        document.getElementById("age").innerHTML = "Age : "+data[profile_id].old;
        document.getElementById("weapon").innerHTML = "Weapon : "+data[profile_id].weapon;
        document.getElementById("about").innerHTML = "Adout : "+data[profile_id].abouts.replace("\\n","<br>");
    }
    else
    {
        alert("ไม่มี ID นี้ในระบบ..");
    }
    
}
