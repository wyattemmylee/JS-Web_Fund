var login = document.querySelector(".login");
var addDef = document.querySelector(".add-def");
var isLogin = true;

function login_Toggle(){
    if (isLogin == true){
        login.innerText = "Logout"
        isLogin = false;
    }
    else if (isLogin == false){
        login.innerText = "Login"
        isLogin = true;
    }    
}

function remove_Def(){
    addDef.remove()
}

function like(element){
    var str = element.innerText
    var numOfLikes = str.match(/\d+/g);
    element.innerText = parseInt(numOfLikes) + 1 + " Likes"
    alert("ninja was liked");
}