function validate() {

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if(username == "a" && password == "a")
{
    alert("login success");
    return false;
}

else {
    alert("error");
}

}