
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

var info_arr = JSON.parse(localStorage.getItem('Register'))||[];

var Name = document.getElementById("name");
var contact = document.getElementById("contact_no");
var email = document.getElementById("email");
var password_1 = document.getElementById("password");
var password_2 = document.getElementById("confirm");

var submit = document.getElementById("submit");
submit.onclick = function() {
    if(Name.value === "" || contact.value === "" || email.value === "" || password_1.value === "" || password_2.value === "")
    {
        alert("Please fill all the data");
    }
    else if(password_1.value === password_2.value) {
        var obj = {
            name:Name.value,
            contact : contact.value,
            email : email.value,
            password : password_1.value,
        }
        info_arr.push(obj);
        localStorage.setItem("Register",JSON.stringify(info_arr));
        console.log(obj,info_arr);
        alert("Registration successful");
    }
    else {
        alert("Invalid Credentials");
    }
    return false;
}