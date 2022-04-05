
var nav_bar = document.getElementById("nav_bar");

var nav_div = document.createElement("div");
nav_div.setAttribute("id", "nav_div");

var home = document.createElement("button");
home.textContent = "Home";
home.setAttribute("id","home");
home.onclick = function() {
    window.location.href = "./index.html";
}

var login = document.createElement("button");
login.textContent = "Login";
login.setAttribute("id","login");
login.onclick = function() {
    window.location.href = "./login.html";
}

var signup = document.createElement("button");
signup.textContent = "Signup";
signup.setAttribute("id","signup");
signup.onclick = function() {
    window.location.href = "./signup.html";
}

nav_div.append(home,signup,login);
nav_bar.append(nav_div);

var data = JSON.parse(localStorage.getItem("Register"));

console.log(data);

var email = document.getElementById("email");
var password = document.getElementById("password");
var submit = document.getElementById("submit");

// var len = data.length;
if(data == null)
{
    alert("Please signup");
    window.location.href = "./signup.html";
}
else{
    data.forEach(function(ele){
        var email1 = ele.email;
        var password1 = ele.password;
    
        submit.onclick = function(){
            if(ele === null)
            {
                window.location.href = "./signup.html";
            }
            else if(email1 === "" || password1 === "")
            {
                alert("please signup");
            }
            else if(email.value === "" || password.value === "")
            {
                alert("Please enter all the correct data.");
            }
            else if(email1 === email.value && password1 === password.value)
            {
                alert("Login Successfull");
                window.location.href = "./index.html";
            }
            else
            {
                alert("Invalid Credentials");
            }
            return false;
        }
    });
}

