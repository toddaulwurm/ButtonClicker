function login(element){
    if(element.innerText == "Login"){
        element.innerText = "Log Off";
    }
    else{
        element.innerText = "Login";
    }
    }

function hide(element){
    element.remove();
}

var likes = 0;

function like(element){
    if(element.innerText == likes);
    likes++;
}